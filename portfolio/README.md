# Juan Felipe Garavito — Portfolio

Portafolio profesional construido con **Next.js 14 (App Router) · React · TypeScript estricto · Tailwind CSS · Motion · Lucide · Supabase**.

## Ejecución local
```bash
npm install
cp .env.example .env.local   # completa las variables
npm run dev                  # http://localhost:3000
npm run lint && npm run build
```

## Contador de visitas (Supabase)
1. Crea un proyecto en Supabase.
2. En **SQL Editor** ejecuta `supabase/schema.sql` (tabla `site_stats` + funciones `get_visit_count` / `increment_visit_count`; la tabla no es accesible directamente con la anon key).
3. Copia **Project URL** y **anon key** a `.env.local` como `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Reinicia el servidor.

Sin variables, o si Supabase falla, el footer muestra `VISITORS —` y el sitio sigue funcionando. Una visita se cuenta una vez cada 6 h por navegador (localStorage).

## Editar contenido (sin tocar componentes)
- `data/profile.ts` — datos personales (del CV)
- `data/skills.ts` — mosaico de conocimiento
- `data/projects.ts` — proyectos. Para agregar uno, añade un objeto; la tarjeta y `/projects/[slug]` se generan solos. Si es un `kind` nuevo, añade su escena en `components/ProjectThumb.tsx`.
- `data/certifications.ts` — certificaciones y su enlace directo (cada una con su `url`).
- **Hoja de vida:** reemplaza `public/cv/Juan_Felipe_Garavito_Hoja_de_Vida.pdf` por el nuevo PDF (mismo nombre) y el botón DOWNLOAD CV lo sirve.
- **Redes:** `linkedin` e `instagram` en `data/profile.ts`.
- **Live Demo:** pon la URL de Render en `liveUrl` y el botón aparece solo.
- Repos de los proyectos 05 y 06: `NEXT_PUBLIC_PROJECT_05_REPO` / `_06_REPO`.

## Estructura
```
app/            rutas, layout, SEO (robots, sitemap), api/visits
components/     sections/, Avatar/ (estados: idle, walking, jumping, sitting, pointing, celebrating)
data/           contenido
lib/            hooks y constantes
supabase/       schema.sql
```

## Deploy (Vercel)
Importa el repo, define las variables de `.env.example` (incluida `NEXT_PUBLIC_SITE_URL`) y despliega.
