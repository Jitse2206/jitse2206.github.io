# Portfolio Jitse Van Laer

Portfoliowebsite van Jitse Van Laer, Industrial Designer. De site is gebouwd met [Astro](https://astro.build) en wordt gehost op GitHub Pages.

## Lokaal starten

```bash
npm install
npm run dev
```

De site draait dan op http://localhost:4321. Met `npm run build` bouw je de site naar `dist/`, met `npm run preview` bekijk je die build.

## Een project toevoegen

1. Maak een map `src/content/projecten/<slug>/` met kleine letters, cijfers en koppeltekens.
2. Zet er de beelden in: `cover.jpg` (3:2), `cover-origineel.jpg` en `<slug>-<rol>-<nr>.jpg`, met als rol `idee`, `techniek`, `resultaat` of `extra`.
3. Maak `index.md` met de titel, de volgorde, de tags en een lijst van alle beelden met hun rol en alt-tekst. Kijk naar een bestaand project als voorbeeld.
4. Heeft het project een 3D-model, zet het `.glb`-bestand met meshopt-compressie (onder 5 MB) in `public/modellen/` en vul `model` in met het bestand en een alt-tekst.

Elke push naar `main` zet de site automatisch online. Het adres volgt uit de naam van de repository. Bij een eigen domein zet je de repositoryvariabele `SITE_URL`, bijvoorbeeld `https://www.voorbeeld.be`.
