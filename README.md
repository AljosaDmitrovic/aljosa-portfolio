# Aljoša Dmitrović — Portfolio

Static personal website (HTML + CSS + vanilla JS, no build step), hosted on GitHub Pages.

Live: https://aljosadmitrovic.github.io/aljosa-portfolio/

## Run locally

```sh
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Update content

All text (profile, experience, projects, education, skills) lives in `assets/js/data.js`.
Edit it, commit, and push — GitHub Pages redeploys automatically.

To replace the CV download, overwrite `assets/Aljosa-Dmitrovic-CV.pdf`.

## Custom domain (later)

1. Add a `CNAME` file containing the domain (e.g. `example.com`).
2. Replace `https://aljosadmitrovic.github.io/aljosa-portfolio/` with the new domain in `index.html`, `robots.txt` and `sitemap.xml`.
3. At the domain registrar, point the domain to GitHub Pages, then enable "Enforce HTTPS" in the repo's Settings → Pages.
