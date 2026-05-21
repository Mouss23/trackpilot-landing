// Les CTA ouvrent désormais la modale LeadFormModal (cf. components/sections/LeadFormModal.tsx),
// qui POST vers le Google Form. L'ancienne constante GOOGLE_FORM_URL a été retirée.
export const CTA_LABEL = "Je crée mon dashboard";

// Liens de navigation (ancres -> smooth scroll)
export const NAV_LINKS = [
  { label: "Fonctionnalités", href: "#solution" },
  { label: "Tarifs", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

// --- Section "Le problème" -------------------------------------------------
export const PROBLEMS = [
  {
    icon: "Layers",
    title: "Données dispersées",
    description:
      "Site web, CRM, Ads, réseaux sociaux, formulaires. Vous passez d'un onglet à l'autre sans jamais avoir la vision d'ensemble.",
  },
  {
    icon: "AlertCircle",
    title: "Tracking incomplet",
    description:
      "Événements manquants, conversions mal configurées, attribution floue. Vos données sont là, mais sont-elles vraiment fiables ?",
  },
  {
    icon: "GitBranch",
    title: "Multicanal illisible",
    description:
      "Vous savez à peu près d'où viennent vos prospects, mais pas précisément pourquoi ils convertissent, ni quel canal a vraiment déclenché la vente.",
  },
  {
    icon: "TrendingDown",
    title: "Décisions à l'instinct",
    description:
      "Vous testez, vous dépensez, vous espérez. Faute d'analyse claire, vous pilotez à l'instinct au lieu de pilotez avec des données.",
  },
] as const;

// --- Section "La solution" -------------------------------------------------
export const SOLUTIONS = [
  {
    icon: "LayoutDashboard",
    eyebrow: "Centraliser",
    title: "Toutes vos données, une seule vue",
    description:
      "Connectez GA4, Google Ads, Meta Ads, LinkedIn, votre CRM, vos formulaires. TrackPilot rassemble tout dans un dashboard clair — sources, leads, conversions, coût par lead, évolution. Fini les onglets à l'infini.",
    bullets: [] as string[],
  },
  {
    icon: "ShieldCheck",
    eyebrow: "Fiabiliser",
    title: "Un score de tracking pour piloter en confiance",
    description:
      "TrackPilot audite votre setup en continu. Score global, détection des événements manquants, vérification des formulaires, CTA, conversions. Vous savez enfin si vos chiffres sont fiables — ou ce qu'il faut corriger.",
    bullets: [] as string[],
  },
  {
    icon: "Sparkles",
    eyebrow: "Décider",
    title: "Des recommandations, pas juste des chiffres",
    description:
      "Des actions concrètes, priorisées, à appliquer dès aujourd'hui.",
    bullets: [
      "Recommandations priorisées par impact business",
      "Actions concrètes, applicables immédiatement",
      "Analyse continue de vos performances marketing",
    ],
  },
] as const;

// --- Section Showcase (zigzag screenshot <-> texte) ------------------------
export type ShowcaseBlock = {
  src: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export const SHOWCASE_BLOCKS: ShowcaseBlock[] = [
  {
    src: "/dashboard/dashboard-1.png",
    eyebrow: "Centralisation",
    title: "Toutes vos sources, une seule vue.",
    description:
      "Connectez GA4, Google Ads, Meta Ads, LinkedIn, votre CRM et vos formulaires. TrackPilot agrège tout dans un dashboard unique — sources, leads, conversions, coût par lead, évolution dans le temps.",
    bullets: [
      "Connexion en 5 minutes, sans ligne de code",
      "+15 sources d'acquisition supportées",
      "Mise à jour temps réel",
    ],
  },
  {
    src: "/dashboard/dashboard-2.png",
    eyebrow: "Fiabilité",
    title: "Un score qui vous dit si vos données sont fiables.",
    description:
      "Avant de tirer des conclusions, vérifiez la base. TrackPilot audite automatiquement votre setup : événements, conversions, formulaires, attribution. Score global de 0 à 100, avec les corrections prioritaires.",
    bullets: [
      "Détection automatique des événements manquants",
      "Recommandations de correction étape par étape",
      "Suivi de l'évolution du score dans le temps",
    ],
  },
  {
    src: "/dashboard/dashboard-3.png",
    eyebrow: "Décisions",
    title: "Des actions, pas des graphiques de plus.",
    description:
      "TrackPilot analyse vos performances en continu et vous livre des recommandations concrètes, priorisées par impact. Vous savez quoi faire dès le lundi matin.",
    bullets: [
      "« Votre trafic LinkedIn convertit 2× mieux que Meta Ads »",
      "« Votre formulaire principal perd 40% des leads (tracking cassé) »",
      "« Google Ads consomme 60% du budget pour 15% des leads »",
    ],
  },
  {
    src: "/dashboard/dashboard-4.png",
    eyebrow: "Attribution",
    title: "Sachez enfin ce qui ramène vos meilleurs leads.",
    description:
      "Comparaison côte à côte de tous vos canaux : volume, qualité, coût, taux de conversion. Identifiez les canaux à pousser, ceux à couper, et ceux à creuser.",
    bullets: [
      "Vue comparative tous canaux confondus",
      "Attribution multi-touch simplifiée",
      "Détection des canaux sous-exploités",
    ],
  },
  {
    src: "/dashboard/dashboard-5.png",
    eyebrow: "Comportement",
    title: "Voyez où vos visiteurs convertissent. Ou abandonnent.",
    description:
      "Cartographie complète du parcours utilisateur : pages visitées, points de friction, tunnels de conversion, pages à optimiser. Vous comprenez enfin pourquoi vos prospects abandonnent.",
    bullets: [
      "Tunnels de conversion visualisés",
      "Identification des pages bloquantes",
      "Suggestions d'optimisation UX",
    ],
  },
];

// --- Section "Le marché" (stats de contexte) -------------------------------
export const MARKET_STATS = [
  {
    value: "60 %",
    text: "des marketeurs B2B utilisent encore Excel pour leur reporting",
    source: "Adobe State of B2B",
  },
  {
    value: "21 %",
    text: "seulement se disent confiants dans leur attribution",
    source: "Visionary Marketing 2026",
  },
  {
    value: "48 %",
    text: "citent l'incapacité à tracker comme défi principal",
    source: "DemandGen 2024",
  },
] as const;

// --- Section "Pour qui ?" --------------------------------------------------
export const TARGETS = [
  {
    icon: "Building2",
    title: "Agences marketing & SEO",
    description: "Pilotez vos performances et celles de vos clients.",
  },
  {
    icon: "Rocket",
    title: "Freelances growth en scale",
    description: "Reprenez la main sur vos multiples canaux et clients.",
  },
  {
    icon: "Network",
    title: "PME multicanal",
    description: "Une vision claire sans dépendre d'un consultant.",
  },
  {
    icon: "GraduationCap",
    title: "Organismes de formation",
    description: "Suivez vos prospects de France Travail jusqu'au site.",
  },
  {
    icon: "HandHeart",
    title: "Structures d'accompagnement",
    description: "Exploitez enfin les données que vous collectez déjà.",
  },
  {
    icon: "Users",
    title: "Petites équipes marketing",
    description: "Décidez sans avoir besoin d'une équipe data interne.",
  },
] as const;

// --- Section comparatif ----------------------------------------------------
export type CompCell = { value: "yes" | "no" | "warn"; label?: string };

export const COMPARISON_COLUMNS = [
  "TrackPilot",
  "Google Analytics",
  "HubSpot",
  "Consultant",
] as const;

export const COMPARISON_ROWS: { feature: string; cells: CompCell[] }[] = [
  {
    feature: "Centralisation multi-sources",
    cells: [
      { value: "yes" },
      { value: "warn", label: "Limité" },
      { value: "yes" },
      { value: "yes" },
    ],
  },
  {
    feature: "Recommandations actionnables",
    cells: [
      { value: "yes" },
      { value: "no" },
      { value: "warn", label: "Manuel" },
      { value: "yes" },
    ],
  },
  {
    feature: "Score de tracking auto",
    cells: [
      { value: "yes" },
      { value: "no" },
      { value: "no" },
      { value: "warn", label: "Ponctuel" },
    ],
  },
  {
    feature: "Prix accessible",
    cells: [
      { value: "yes", label: "Dès 49€/mois" },
      { value: "yes", label: "Gratuit" },
      { value: "no", label: "Élevé" },
      { value: "no", label: "Très élevé" },
    ],
  },
  {
    feature: "Pas besoin d'expert",
    cells: [
      { value: "yes" },
      { value: "no" },
      { value: "no" },
      { value: "yes" },
    ],
  },
  {
    feature: "Mise en place rapide",
    cells: [
      { value: "yes", label: "5 min" },
      { value: "warn" },
      { value: "no" },
      { value: "no" },
    ],
  },
];

// --- Section Tarifs --------------------------------------------------------
export const PRICING = [
  {
    name: "Starter",
    price: "49 €",
    period: "/mois",
    audience: "Freelances et petites structures",
    featured: false,
    badge: null as string | null,
    features: [
      "Dashboard simple",
      "Connexion à 3 sources",
      "Score de tracking",
      "Recommandations basiques",
      "Support par email",
    ],
  },
  {
    name: "Pro",
    price: "129 €",
    period: "/mois",
    audience: "Agences, PME, équipes marketing",
    featured: true,
    badge: "LE PLUS POPULAIRE",
    features: [
      "Tout Starter, plus :",
      "Sources illimitées",
      "Recommandations avancées",
      "Suivi de campagnes",
      "Comparaisons temporelles",
      "Alertes personnalisées",
      "Export de rapports",
      "Support prioritaire",
    ],
  },
  {
    name: "Premium",
    price: "Sur devis",
    period: "",
    audience: "Structures qui veulent l'outil + l'humain",
    featured: false,
    badge: null,
    features: [
      "Tout Pro, plus :",
      "Onboarding personnalisé",
      "Appel mensuel d'analyse",
      "Recommandations sur mesure",
      "Conseils d'optimisation",
      "Support dédié",
    ],
  },
] as const;

// --- Section FAQ -----------------------------------------------------------
export const FAQ = [
  {
    question: "TrackPilot remplace-t-il Google Analytics ?",
    answer:
      "Non. TrackPilot se connecte à GA4 (et à d'autres sources) pour en exploiter intelligemment les données. On ne remplace pas votre setup, on lui donne du sens.",
  },
  {
    question: "Combien de temps pour configurer l'outil ?",
    answer:
      "La connexion des sources principales prend environ 5 minutes. Le premier score de tracking est généré dans la foulée, et les premières recommandations apparaissent dès qu'il y a assez de données.",
  },
  {
    question: "Avec quels outils TrackPilot est-il compatible ?",
    answer:
      "GA4, Google Ads, Meta Ads, LinkedIn Ads, Search Console, les principaux CRM (HubSpot, Pipedrive, etc.) et les outils de formulaires. La liste s'enrichit en continu.",
  },
  {
    question: "Faut-il avoir des compétences techniques ?",
    answer:
      "Non. TrackPilot est conçu pour des profils marketing, pas pour des data analysts. Si vous savez utiliser GA4 même partiellement, vous saurez utiliser TrackPilot.",
  },
  {
    question: "Que se passe-t-il si mon tracking est complètement cassé ?",
    answer:
      "Le score de tracking vous le dira clairement, en pointant ce qui manque. Avec l'offre Premium, on vous accompagne pour corriger le setup.",
  },
  {
    question: "Puis-je essayer avant de m'engager ?",
    answer:
      "Oui. L'inscription ouvre un audit gratuit de votre tracking actuel. Aucune carte bancaire demandée.",
  },
] as const;

// --- Footer ----------------------------------------------------------------
export const FOOTER_COLUMNS = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "#solution" },
      { label: "Tarifs", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Guide du tracking", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "CGU", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
    ],
  },
] as const;
