# Portafolio Web · Diseño Gráfico UNICESMAG

Landing page / portafolio interactivo del programa ("Taller Digital Vivo").
Tecnología: HTML5 + CSS3 + Vanilla JS. Sin dependencias, sin build. Solo abrir `index.html`.

```
Portafolio Web/
├── index.html        ← estructura (10 secciones)
├── css/styles.css    ← sistema de diseño (paleta oficial, tipografías, responsive)
├── js/data.js        ← ⭐ TODO EL CONTENIDO EDITABLE VIVE AQUÍ
├── js/main.js        ← interacciones (filtros, modal, malla, FAQ, contadores)
└── assets/img/       ← (crear) fotos de proyectos, laboratorios y OG
```

---

## Checklist de "cosas por reemplazar" (búsqueda rápida)

Busca en los archivos la palabra **`TODO`** y **`[`corchetes`]`**. Resumen:

| # | Qué | Dónde | Estado |
|---|-----|-------|--------|
| 1 | Número de WhatsApp de admisiones | `js/data.js → CONFIG.whatsapp` (formato `573XXXXXXXXX`) | ⬜ pendiente |
| 2 | Enlaces a redes oficiales | `js/data.js → CONFIG.social` | ⬜ pendiente (hasta unificar naming) |
| 3 | Proyectos reales (título, estudiante, semestre, asignatura, docente, foto) | `js/data.js → PROYECTOS` | ⬜ demo (8 tarjetas demo) |
| 4 | Perfiles de egresados + testimonios autorizados | `index.html → sección #egresados` | ⬜ espacio reservado |
| 5 | Fotos de laboratorios | `index.html → sección #laboratorios` (reemplazar `.ph` por `<img>`) | ⬜ placeholder |
| 6 | Wordmark oficial del programa (SVG del paquete gráfico) | `index.html → .brand` | ⬜ provisional tipográfico |
| 7 | Cifra de empleabilidad / nº egresados | `index.html → .stats` (agregar tarjeta cuando llegue el dato) | ⬜ NO usar cifras sin fuente |
| 8 | Imagen Open Graph (1200×630) | `index.html → meta og:image` | ⬜ pendiente |
| 9 | (Opcional) Video showreel del hero | `index.html → .hero` (comentario con `<video>`) | ⬜ pendiente |
| 10 | Proyectos representativos por fase de malla | `js/data.js → CICLOS.proyecto` | ⬜ pendiente |

**Regla del proyecto: ningún dato se publica como oficial sin fuente verificada.** Los placeholders van visibles y marcados a propósito.

## Cómo cargar un proyecto real

1. Copia la foto a `assets/img/` (WebP o JPG, ~1200px de ancho).
2. En `js/data.js → PROYECTOS` duplica un bloque y complétalo:
   ```js
   {
     id: "brand-1", demo: false, categoria: "branding",
     titulo: "Nombre real del proyecto",
     estudiante: "Ana Pérez", semestre: "6º semestre",
     asignatura: "Sistemas de identidad", docente: "Docente X",
     herramientas: "Illustrator · Figma",
     desc: "Descripción real del problema y la solución…",
     img: "assets/img/proyecto-1.jpg",   // sin img → portada tipográfica
   }
   ```
3. Elimina las tarjetas `demo: true` cuando haya suficientes reales (y la nota "demo" del HTML desaparece sola al no haber `demo:true`... nota: el aviso `.demo-note` se puede borrar a mano del HTML).

## Publicar en GitHub Pages (5 minutos)

1. Crea un repositorio en GitHub (ej.: `portafolio-diseno-unicesmag`).
2. Sube el contenido de esta carpeta (raíz del repo):
   ```bash
   git init && git add . && git commit -m "Portafolio web v1"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/portafolio-diseno-unicesmag.git
   git push -u origin main
   ```
3. En el repo: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
4. En ~1 minuto queda pública en `https://TU-USUARIO.github.io/portafolio-diseno-unicesmag/`.
5. Esa URL es la que va al QR del teaser (con UTM: `?utm_source=teaser&utm_medium=impreso`) y a la diapositiva del informe (Pág. 45 de la Maqueta V5).

> La web funciona abriendo `index.html` directamente (doble clic), también sin internet (las fuentes caen a alternativas del sistema).

## Decisiones de contenido (importantes)

- **Cifras del hero**: solo datos verificables (20+ años, 2 énfasis, 10 semestres/157 créditos, 100% presencial, fuente: PEP). La empleabilidad **no** se muestra hasta llegar el dato oficial; al llegar, agregar una tarjeta `.stat` más.
- **Fases de la malla**: se usan las fases oficiales del PEP (**Descubrir 1º–3º · Conocer 4º–6º · Estructurar 7º–10º**), no los "ciclos" informales del plan original.
- **VirtuaLAB**: descrito según el PEP (plataforma virtual de lectura, pensamiento crítico e idiomas), no como sala de render.
- **Accesibilidad**: contraste AA, navegación por teclado (modal con Esc, tarjetas con Enter), `prefers-reduced-motion` respetado.
