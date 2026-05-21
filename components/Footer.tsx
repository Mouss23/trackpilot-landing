import Container from "@/components/ui/Container";
import { FOOTER_COLUMNS } from "@/lib/constants";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-background-secondary">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Colonne marque */}
          <div className="col-span-2 md:col-span-1">
            <span
              className="text-lg font-semibold tracking-tight text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Track<span className="text-gradient">Pilot</span>
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Le copilote d&apos;acquisition des équipes marketing.
            </p>
          </div>

          {/* Colonnes de liens */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ligne du bas */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-sm text-faint">
            © 2025 TrackPilot. Tous droits réservés.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-lg border border-line p-2 text-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="#"
              aria-label="X"
              className="rounded-lg border border-line p-2 text-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              <XIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
