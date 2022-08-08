# Minimalism

<a href="https://venerable-sundae-621325.netlify.app/" target="blank_">
  <img alt="antreprima" src="http://marcomicale.altervista.org/minimalism.webp" width="100%" >
</a>

> Simplicity is the ultimate sophistication!

## Cosa voglio ottene?

- ✅ Creazione pagine velocemente
- ✅ Favicon personalizzabile (msapplication/apple/safari/chrome)
- ✅ Blog
- ✅ Fedd Rss
- ✅ Sitemap
- ✅ PWA
- ✅ Immagini social dinamiche per ogni pagina/post
- ✅ Ottimizzazione SEO
- ✅ 404 error page
- ✅ Offline page
- ✅ Link social facili - edit /src/_11ty/_data/meta.js
- ✅ Tutti 100 in lighthouse
- ✅ Light/Dark mode
- ✅ [Netifly](https://www.netlify.com/)

## Cosa ho usato:

- [Eleventy](https://github.com/11ty/eleventy)
  - [Plugin eleventy-img](https://github.com/11ty/eleventy-img)
  - [Plugin eleventy-plugin-rss](https://github.com/11ty/eleventy-plugin-rss)
  - [Plugin eleventy-navigation](https://github.com/11ty/eleventy-navigation)
  - [Plugin-social-images](https://github.com/5t3ph/eleventy-plugin-social-images)
  - [Plugin-reading-time](https://github.com/johanbrook/eleventy-plugin-reading-time)
- [Tailwindcss](https://github.com/tailwindlabs/tailwindcss)
  - [Tailwindcss typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [Slugify]([https://github.com/simov/slugify)
- [Luxon](https://github.com/moment/luxon)
- [html minifier](https://github.com/kangax/html-minifier)
- [rimraf](https://github.com/isaacs/rimraf)
- [npm-run-all](https://github.com/mysticatea/npm-run-all)
- [Tabler Icon](https://github.com/tabler/tabler-icons)

## Status
### BETA

Usabile ma con qualche correzione da effettuare.

## Folder Tree

```bash
Minimalism
|   .eleventy.js
|   .gitattributes
|   .gitignore
|   LICENSE
|   logo.png                          # Sostituisci questo file con il tuo logo
|   netlify.toml
|   package-lock.json
|   package.json
|   README.md
|   SECURITY.md
|   tailwind.config.js
|
+---.github
|   \---workflows
|           codeql-analysis.yml
|
+---.vscode
|       tasks.json
|
\---src
    |   ...                           # Aggiungi le pagine che vuoi
    |   blog.md                       # Pagina del tuo Blog (modifica da qui la intro)
    |   index.md                      # La Prima pagina del tuo sito (essenziale)
    |
    +---blog
    |       ...                       # Inserisci qui i tuoi post per il blog
    |
    \---_11ty
        +---_data
        |       meta.js               # MODIFICA QUESTO FILE!
        |
        +---_generate
        |       404.njk
        |       feed.njk
        |       manifest.njk
        |       offline.njk           # Pagina mostrata dall'app se offline
        |       pagesjson.njk
        |       robot.njk
        |       sitemap.njk
        |       socialtemplate.njk    # Modifica se vuoi cambiare l'immagine social
        |
        +---_includes
        |       favicon.njk
        |       footer.njk
        |       head-article.njk
        |       head-website.njk
        |       head.njk
        |       nav.njk               # Header sito (Titolo e Nav Bar)
        |
        +---_layouts                  # Layouts:
        |       article.njk           # Articoli del Blog
        |       blog.njk              # Pagina del Blog
        |       page.njk              # Pagine generiche
        |
        +---_social                   # File generati per l'immagine social
        |       pages.json
        |       social.css
        |       template.html
        |
        +---_static
        |   +---app                   # Risorse statiche
        |   |       .htaccess
        |   |       sw.js
        |   |
        |   +---favicon
        |   |       ...               # Favicon Generate a partire dal file logo.png
        |   |
        |   \---img
        |           ...
        |
        \---_tailwindCSS
                raw-social.css        # CSS del tuo sito
                raw-website.css       # Modifica se vuoi cambiare l'immagine social
```
