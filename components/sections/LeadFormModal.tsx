"use client";

/**
 * INSTRUCTIONS POUR CONNECTER LE GOOGLE FORM :
 *
 * 1. Créer un Google Form avec les 6 champs ci-dessous (+ un champ caché "source").
 * 2. Récupérer l'URL d'action :
 *    - Ouvrir le formulaire en mode "prévisualisation"
 *    - Inspecter le HTML, chercher l'attribut "action" du <form>
 *    - Remplacer GOOGLE_FORM_ACTION_URL ci-dessous (remplacer /viewform par /formResponse)
 * 3. Récupérer les IDs des champs :
 *    - Dans le HTML inspecté, chaque champ a un name="entry.XXXXXX"
 *    - Mettre à jour FIELD_MAPPING avec les vrais IDs
 * 4. Tester en soumettant le formulaire et vérifier que la réponse arrive bien
 *    dans le Google Sheet associé.
 */

import { useId, useState } from "react";
import {
  Loader2,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  ArrowRight,
  Lock,
} from "lucide-react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { useLeadModal } from "@/hooks/useLeadModal";
import { cn } from "@/lib/cn";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/u/3/d/1vUsFZwMKiUq1q88fv3tRuhOQm4ZTt8Gi6JN43FLZfdY/formResponse";

const FIELD_MAPPING = {
  firstName: "entry.548761128",
  email: "entry.1795130303",
  company: "entry.1985102920",
  structureType: "entry.951873469",
  sources: "entry.3800038",
  budget: "entry.1989170822",
  source: "entry.777777", // champ caché : source du CTA (tracking)
};

const STRUCTURE_TYPES = [
  "Agence marketing",
  "Freelance growth",
  "PME multicanal",
  "Organisme de formation",
  "Structure d'accompagnement",
  "Autre",
];

const SOURCE_OPTIONS = [
  "Google Ads",
  "Meta Ads",
  "LinkedIn Ads",
  "SEO",
  "Emailing",
  "Réseaux sociaux organiques",
  "Partenaires / prescripteurs",
  "Autre",
];

const BUDGET_OPTIONS = [
  "< 1 000 €",
  "1 000 - 5 000 €",
  "5 000 - 20 000 €",
  "> 20 000 €",
];

type Status = "idle" | "loading" | "success" | "error";

// Champs requis dans l'ordre du formulaire (pour le scroll vers la 1re erreur).
const FIELD_ORDER = [
  "firstName",
  "email",
  "company",
  "structureType",
  "budget",
] as const;
type FieldKey = (typeof FIELD_ORDER)[number];

// Calcule le message d'erreur d'un champ (chaîne vide = valide).
function fieldError(key: FieldKey, v: string): string {
  switch (key) {
    case "firstName":
      return !v.trim() || v.trim().length < 2 ? "Indiquez votre prénom" : "";
    case "email":
      if (!v.trim()) return "Indiquez votre email";
      return !EMAIL_REGEX.test(v.trim()) ? "Format d'email invalide" : "";
    case "company":
      return !v.trim() || v.trim().length < 2
        ? "Indiquez le nom de votre structure"
        : "";
    case "structureType":
      return !v ? "Sélectionnez un type de structure" : "";
    case "budget":
      return !v ? "Sélectionnez une fourchette de budget" : "";
    default:
      return "";
  }
}

const labelClass = "block text-sm font-medium text-ink";

// Wrapper monté en permanence : il pilote l'ouverture de la modale.
// Le formulaire lui-même (LeadForm) est rendu COMME ENFANT de la modale, donc
// démonté à la fermeture et remonté à l'ouverture => l'état se réinitialise
// naturellement, sans effet de reset.
export default function LeadFormModal() {
  const { isOpen, closeModal, source } = useLeadModal();
  const titleId = useId();

  return (
    <Modal isOpen={isOpen} onClose={closeModal} labelledBy={titleId}>
      <LeadForm titleId={titleId} source={source} onClose={closeModal} />
    </Modal>
  );
}

function LeadForm({
  titleId,
  source,
  onClose,
}: {
  titleId: string;
  source: string | null;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [structureType, setStructureType] = useState("");
  const [sources, setSources] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const toggleSource = (value: string) =>
    setSources((prev) =>
      prev.includes(value)
        ? prev.filter((s) => s !== value)
        : [...prev, value]
    );

  // Met à jour l'erreur d'un champ en temps réel (uniquement après 1re soumission).
  const liveUpdate = (key: FieldKey, value: string) => {
    if (!hasSubmitted) return;
    setErrors((prev) => {
      const next = { ...prev };
      const msg = fieldError(key, value);
      if (msg) next[key] = msg;
      else delete next[key];
      return next;
    });
  };

  // Helper de saisie : applique la valeur + revalide en direct.
  const onField =
    (key: FieldKey, setter: (v: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setter(e.target.value);
      liveUpdate(key, e.target.value);
    };

  const validateAll = () => {
    const values: Record<FieldKey, string> = {
      firstName,
      email,
      company,
      structureType,
      budget,
    };
    const next: Partial<Record<FieldKey, string>> = {};
    FIELD_ORDER.forEach((k) => {
      const msg = fieldError(k, values[k]);
      if (msg) next[k] = msg;
    });
    setErrors(next);
    return next;
  };

  // Classe d'un input/select selon son état d'erreur.
  const fieldCls = (key: FieldKey) =>
    cn(
      "h-[42px] w-full rounded-lg border bg-surface-elevated px-3.5 text-sm text-ink placeholder:text-faint transition-colors focus:outline-none focus:ring-2",
      errors[key]
        ? "border-danger focus:border-danger focus:ring-danger/40"
        : "border-line focus:border-primary focus:ring-primary/40"
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);

    const errs = validateAll();
    if (Object.keys(errs).length > 0) {
      // Scroll (smooth) vers le premier champ en erreur.
      const first = FIELD_ORDER.find((k) => errs[k]);
      if (first) {
        const el = document.getElementById(`lf-${first}`);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
        el?.focus?.();
      }
      return;
    }

    setStatus("loading");

    // Construit le payload au format Google Form (clé répétée pour le multi-select).
    const body = new URLSearchParams();
    body.append(FIELD_MAPPING.firstName, firstName);
    body.append(FIELD_MAPPING.email, email);
    body.append(FIELD_MAPPING.company, company);
    body.append(FIELD_MAPPING.structureType, structureType);
    sources.forEach((s) => body.append(FIELD_MAPPING.sources, s));
    body.append(FIELD_MAPPING.budget, budget);
    body.append(FIELD_MAPPING.source, source ?? "inconnu");

    try {
      // Google Form exige mode:'no-cors' (réponse opaque => on traite la
      // résolution comme un succès).
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-4 text-center">
        <CheckCircle2 className="h-14 w-14 text-success" />
        <h2 id={titleId} className="mt-5 text-2xl font-semibold text-ink">
          C&apos;est noté !
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          On revient vers vous sous 24h avec votre audit personnalisé. À très
          vite.
        </p>
        <Button
          variant="primary"
          size="md"
          className="mt-7 w-full"
          onClick={onClose}
        >
          Fermer
        </Button>
      </div>
    );
  }

  // Message d'erreur sous un champ (fonction de rendu, pas un composant).
  const errorLine = (field: FieldKey) =>
    errors[field] ? (
      <p className="flex items-center gap-1.5 text-[13px] text-danger">
        <AlertCircle size={14} className="shrink-0" />
        {errors[field]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 id={titleId} className="text-2xl font-semibold text-ink">
        Créez votre dashboard.
      </h2>
      <p className="mt-1.5 mb-6 text-sm leading-relaxed text-muted">
        Quelques infos rapides pour qu&apos;on configure votre audit gratuit.
      </p>

      <div className="space-y-4">
        {/* Prénom */}
        <div className="space-y-1.5">
          <label className={labelClass} htmlFor="lf-firstName">
            Prénom
          </label>
          <input
            id="lf-firstName"
            type="text"
            value={firstName}
            onChange={onField("firstName", setFirstName)}
            className={fieldCls("firstName")}
            placeholder="Camille"
            aria-invalid={!!errors.firstName}
          />
          {errorLine("firstName")}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className={labelClass} htmlFor="lf-email">
            Email professionnel
          </label>
          <input
            id="lf-email"
            type="email"
            value={email}
            onChange={onField("email", setEmail)}
            className={fieldCls("email")}
            placeholder="camille@entreprise.com"
            aria-invalid={!!errors.email}
          />
          {errorLine("email")}
        </div>

        {/* Structure */}
        <div className="space-y-1.5">
          <label className={labelClass} htmlFor="lf-company">
            Nom de votre structure
          </label>
          <input
            id="lf-company"
            type="text"
            value={company}
            onChange={onField("company", setCompany)}
            className={fieldCls("company")}
            placeholder="Acme Studio"
            aria-invalid={!!errors.company}
          />
          {errorLine("company")}
        </div>

        {/* Type de structure */}
        <div className="space-y-1.5">
          <label className={labelClass} htmlFor="lf-structureType">
            Type de structure
          </label>
          <select
            id="lf-structureType"
            value={structureType}
            onChange={onField("structureType", setStructureType)}
            className={fieldCls("structureType")}
            aria-invalid={!!errors.structureType}
          >
            <option value="" disabled>
              Sélectionnez…
            </option>
            {STRUCTURE_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errorLine("structureType")}
        </div>

        {/* Sources (checkboxes) — facultatif, grille 2 colonnes */}
        <fieldset className="space-y-1.5">
          <legend className={labelClass}>
            Sources d&apos;acquisition principales
          </legend>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {SOURCE_OPTIONS.map((s) => (
              <label
                key={s}
                className="flex min-h-9 cursor-pointer items-center gap-2 text-sm text-muted"
              >
                <input
                  type="checkbox"
                  checked={sources.includes(s)}
                  onChange={() => toggleSource(s)}
                  className="h-4 w-4 rounded border-line accent-primary"
                />
                {s}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Budget (radios) — grille 2 colonnes */}
        <fieldset id="lf-budget" className="space-y-1.5">
          <legend className={labelClass}>Budget marketing mensuel</legend>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {BUDGET_OPTIONS.map((b) => (
              <label
                key={b}
                className="flex min-h-9 cursor-pointer items-center gap-2 text-sm text-muted"
              >
                <input
                  type="radio"
                  name="budget"
                  checked={budget === b}
                  onChange={() => {
                    setBudget(b);
                    liveUpdate("budget", b);
                  }}
                  className="h-4 w-4 border-line accent-primary"
                />
                {b}
              </label>
            ))}
          </div>
          {errorLine("budget")}
        </fieldset>
      </div>

      {status === "error" && (
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-warning/40 bg-warning/10 px-3.5 py-2.5 text-sm text-warning">
          <AlertTriangle size={16} />
          <span>
            Une erreur réseau est survenue.{" "}
            <button
              type="submit"
              className="font-medium underline underline-offset-2"
            >
              Réessayer
            </button>
          </span>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="mt-6 h-12 w-full"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Je crée mon dashboard
            <ArrowRight size={18} />
          </>
        )}
      </Button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-faint">
        <Lock size={13} />
        Vos données restent confidentielles. Pas de spam.
      </p>
    </form>
  );
}
