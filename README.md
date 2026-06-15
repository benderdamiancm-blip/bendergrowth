# Bender Growth

Sitio web de **Bender Growth**, consultoría de marca personal y arquitectura de activos digitales para profesionales con trayectoria. La web presenta la consultoría y su metodología insignia, el **Método Prisma**: un sistema de tres etapas que ordena lo que el profesional ya sabe para hacerlo visible y traerle mejores clientes.

🔗 **Producción:** https://bendergrowth.org *(deploy en Vercel)*

---

## Stack

- **HTML5** semántico
- **CSS3** (variables, sin frameworks)
- **JavaScript vanilla** (mínimo: año dinámico del footer)
- Sin proceso de build. Sitio estático puro.

---

## Estructura del proyecto

```
bender-growth-web/
├── index.html              # Página de inicio
├── metodo-prisma/
│   └── index.html          # Subpágina del Método Prisma  → /metodo-prisma
├── css/
│   ├── global.css          # Tokens, reset, nav, botones, footer (compartido)
│   ├── home.css            # Estilos del inicio
│   └── metodo-prisma.css   # Estilos de la subpágina
├── js/
│   └── main.js             # Año dinámico del footer
├── assets/
│   ├── img/
│   │   ├── logos/          # Logos Bender Growth + Método Prisma (claro/oscuro)
│   │   ├── fotos/          # Foto de Damian Bender
│   │   ├── og-home.png             # Open Graph (inicio)
│   │   └── og-metodo-prisma.png    # Open Graph (subpágina)
│   └── favicon/            # favicon.ico, favicon-32x32.png, apple-touch-icon.png
├── robots.txt
├── sitemap.xml
├── vercel.json             # cleanUrls + cache headers
├── .gitignore
└── README.md
```

---

## Correr el proyecto localmente

> ⚠️ **Importante:** el sitio usa **URLs limpias** (`/metodo-prisma`) y **rutas absolutas** (`/css/...`, `/assets/...`). Por eso **no funciona abriendo el `index.html` con doble clic** (`file://`): hay que servirlo desde un servidor local.

**Opción A — Python** (no requiere instalar nada extra):

```bash
cd bender-growth-web
python -m http.server 8000
```

Abrir en el navegador: **http://localhost:8000**

**Opción B — Live Server (VS Code):**

1. Instalar la extensión *Live Server*.
2. Click derecho sobre `index.html` → *Open with Live Server*.

---

## Deploy en Vercel

El sitio es estático: no hay build. La configuración relevante está en `vercel.json`:

- `cleanUrls: true` → sirve `/metodo-prisma` (sin `.html` ni barra final) y redirige las variantes.
- `trailingSlash: false` → URLs canónicas sin barra final.
- Cache headers de larga duración para `assets/`.

Pasos: importar el repositorio en Vercel → *Framework Preset:* **Other** → *Root Directory:* `./` → *Deploy*. Luego asignar el dominio `bendergrowth.org`.

---

**Pensar como un sistema. Escuchar como un coach.**
