# Aljoša Dmitrović — Portfolio

Static personal website (HTML + CSS + vanilla JS, no build step), hosted on GitHub Pages.

Live: https://aljosa.me/ (GitHub Pages, custom domain set in `CNAME`)

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

## Custom domain

The site is served at https://aljosa.me/ via the `CNAME` file. DNS is managed at GoDaddy:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | aljosadmitrovic.github.io |

If the domain ever changes, update `CNAME` and the URLs in `index.html`, `robots.txt` and `sitemap.xml`.
