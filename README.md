# SuperPromo — frontend

Abre `SuperPromo.dc.html` en el navegador (sirve la carpeta con cualquier servidor estático, p. ej. `npx serve .`).

## Dónde vive cada cosa
- **Catálogo**: arreglo `PRODUCTS` dentro del script de `SuperPromo.dc.html` (12 productos del documento, en su orden original). Cada producto: `id` (slug), `cat`, `name`, `img`, `url` (afiliado exacto), `price`, `prev` (solo si aparece en la publicación), `blurb`, `chips`, `specs`, `promo` opcional.
- **Configuración**: objeto `CONFIG` (dominio, Instagram, Facebook, WhatsApp, Mercado Libre, endpoint de contacto). Las redes sociales se muestran como "por configurar" hasta que tengan URL.
- **Comparador**: usa `specs` + `SPEC_LABELS`. Solo muestra filas con datos reales; lo demás aparece como "No especificado".
- **Imágenes**: `assets/products/p1..p12.png` (recortes de las capturas originales `image1..12.png`), `assets/brand/` (marca, logo, miniatura social).

## Pendiente (requiere backend / Bolt)
- Envío del formulario de contacto (hoy solo valida, no envía).
- Rutas SEO (`/producto/slug`, `/comparar`, `/recursos`, `/blog/slug`, `/negocios-y-reventa`) con render en servidor; los `id` ya funcionan como slugs.
- `og:image` y canonical necesitan URL absoluta cuando haya dominio.
- Precios: capturados al momento de publicar; conectar a una fuente actualizada.
- Aviso de privacidad y términos: textos legales pendientes.
- Espacio publicitario reservado (no conectado a ninguna red).
