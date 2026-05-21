// Capture 5 vues du dashboard Vite (localhost:5199) en PNG 16:10 cohérents
// (plein viewport 1440x900) pour alimenter le carousel de la landing.
import puppeteer from "puppeteer";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { mkdirSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "dashboard");
mkdirSync(OUT, { recursive: true });

// Chaque vue = un point de défilement. y:0 => haut de page (KPIs).
const SHOTS = [
  { target: null, file: "dashboard-1.png" }, // Vue d'ensemble (KPIs)
  { target: "#score", file: "dashboard-2.png" }, // Score de tracking
  { target: "#recommendations", file: "dashboard-3.png" }, // Recommandations
  { target: "#sources", file: "dashboard-4.png" }, // Analyse des sources
  { target: "#pages", file: "dashboard-5.png" }, // Parcours / pages
];

const browser = await puppeteer.launch({
  headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
});
const page = await browser.newPage();
await page.goto("http://localhost:5199/", { waitUntil: "networkidle0" });

// Déverrouille la zone floutée (RevealOverlay)
await page.evaluate(() => {
  const btn = [...document.querySelectorAll("button")].find((b) =>
    b.textContent.includes("Découvrir l’analyse complète")
  );
  btn?.click();
});
await new Promise((r) => setTimeout(r, 1200));

for (const shot of SHOTS) {
  await page.evaluate((sel) => {
    const headerH =
      document.querySelector("header")?.getBoundingClientRect().height ?? 120;
    if (!sel) {
      window.scrollTo({ top: 0 });
      return;
    }
    const el = document.querySelector(sel);
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: Math.max(0, top - headerH - 20) });
  }, shot.target);
  await new Promise((r) => setTimeout(r, 450));
  await page.screenshot({ path: join(OUT, shot.file) }); // viewport 1440x900
  console.log("saved", shot.file);
}

await browser.close();
console.log("done");
