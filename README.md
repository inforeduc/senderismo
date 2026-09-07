# 🥾 Senderismo 10K+ Morán - Lara | Sitio Web Oficial

Página web moderna, interactiva y 100% responsiva diseñada para el grupo de senderismo y montañismo **Senderismo 10K+ Morán - Lara**.

Permite mostrar fotos y videos de tus rutas, anunciar próximas salidas, conectar con WhatsApp y todas tus redes sociales (Facebook, Instagram, TikTok y YouTube), y está optimizada para alojarse **100% gratis en GitHub Pages**.

---

## 📁 Estructura del Proyecto

```text
senderismo-moran-web/
├── index.html         # Estructura principal de la página web
├── styles.css         # Diseño visual, colores de montaña y modo oscuro
├── config.js          # Archivo para cambiar enlaces de WhatsApp y Redes Sociales
├── content.js         # Base de datos donde agregas fotos, videos y rutas
├── app.js             # Lógica de la galería, reproductor de video y asistente
├── assets/
│   ├── logo.png       # Logo circular recortado y optimizado en alta calidad
│   ├── favicon.png    # Icono de la pestaña del navegador
│   └── images/        # Carpeta para guardar tus fotos y videos locales
└── README.md          # Esta guía de uso y publicación
```

---

## 🚀 Cómo Hospedar la Página GRATIS en GitHub Pages

GitHub Pages te permite alojar esta web de forma ilimitada, segura (con candadito HTTPS) y con tu propio enlace gratuito (`https://tu-usuario.github.io/senderismo-moran`).

### Opción 1: Desde la web de GitHub (La más fácil, sin instalar nada)

1. **Crea una cuenta en GitHub:**
   Entra en [github.com](https://github.com/) e inicia sesión o regístrate.
2. **Crea un nuevo repositorio:**
   - Haz clic en el botón verde **"New"** (o **Nuevo repositorio**).
   - En *Repository name*, escribe por ejemplo: `senderismo-moran`.
   - Marca la casilla **Public** (Público).
   - Haz clic en **"Create repository"**.
3. **Sube los archivos de la carpeta:**
   - En la pantalla que aparece, haz clic en el enlace que dice **"uploading an existing file"** (subir un archivo existente).
   - Arrastra todos los archivos y carpetas de esta carpeta (`index.html`, `styles.css`, `config.js`, `content.js`, `app.js`, y la carpeta `assets`).
   - Al final de la página, presiona el botón verde **"Commit changes"**.
4. **Activa GitHub Pages:**
   - En la parte superior de tu repositorio, haz clic en **Settings** (Configuración).
   - En el menú lateral izquierdo, haz clic en **Pages**.
   - Bajo **"Build and deployment"** > **Branch**:
     - Selecciona la rama `main` (o `master`).
     - Deja la carpeta en `/ (root)`.
     - Haz clic en **Save** (Guardar).
5. **¡Listo!:** En 1 o 2 minutos, GitHub te dará tu enlace oficial (ejemplo: `https://tu-usuario.github.io/senderismo-moran`). ¡Copia ese enlace y compártelo en tu grupo de WhatsApp!

---

### Opción 2: Usando la Terminal / Git

Si prefieres usar comandos de Git:

```bash
cd senderismo-moran-web
git init
git add .
git commit -m "Sitio web inicial de Senderismo 10K+ Moran - Lara"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/senderismo-moran.git
git push -u origin main
```

Luego ve a **Settings** > **Pages** en GitHub y activa la rama `main`.

---

## ⚙️ Cómo Personalizar Enlaces (WhatsApp y Redes Sociales)

Abre el archivo `config.js` con cualquier editor de texto (Bloc de Notas, VS Code, etc.):

```javascript
// Cambia tu enlace de invitación a WhatsApp o número:
whatsapp: {
  groupInviteUrl: "https://chat.whatsapp.com/TU_ENLACE_DE_INVITACION",
  adminPhone: "584120000000",
  welcomeMessage: "¡Hola! Quiero unirme a Senderismo 10K+ Morán..."
},

// Cambia los enlaces de tus redes sociales:
socialLinks: {
  facebook: "https://www.facebook.com/tupagina",
  instagram: "https://www.instagram.com/tuperfil",
  tiktok: "https://www.tiktok.com/@tuusuario",
  youtube: "https://www.youtube.com/@tucanal"
}
```

> **¿Cómo sacar el enlace de tu grupo de WhatsApp?**
> 1. Abre WhatsApp en tu teléfono.
> 2. Entra a tu grupo de senderismo.
> 3. Toca el nombre del grupo arriba para ver la información.
> 4. Baja y toca **"Enlace de invitación"**.
> 5. Dale a **"Copiar enlace"** y pégalo en `groupInviteUrl`.

---

## 📸 Cómo Agregar Nuevas Fotos, Videos o Rutas

Tienes **dos formas sencillas** de hacerlo:

### Forma 1: Usando el Asistente en la propia Página Web (Recomendada)
1. Abre tu página web en el navegador.
2. Haz clic en el botón **"+ Publicar"** arriba a la derecha.
3. Se abrirá una ventana donde puedes escribir el título, fecha, distancia (10K+), fotos o enlace de YouTube.
4. Tienes dos opciones:
   - **"Previsualizar en la Página Ahora"**: Podrás ver cómo queda inmediatamente en tu pantalla.
   - **"Copiar Código para content.js"**: Te genera el código listo; solo tienes que abrir `content.js` y pegarlo.

### Forma 2: Editando directamente `content.js`
Abre `content.js`. Verás publicaciones ya creadas como ejemplo. Para agregar una nueva, simplemente copia y pega este bloque al principio de `HIKING_POSTS`:

```javascript
{
  id: 7,
  title: "Nombre de tu Nueva Ruta",
  category: "rutas",       // "rutas", "fotos" o "videos"
  type: "image",           // "image" o "video"
  date: "15 de Octubre, 2026",
  location: "Humocaro, Morán - Lara",
  distance: "12.5 km",
  elevation: "+600 m",
  difficulty: "Moderada",
  description: "Descripción de lo vivido en la ruta...",
  coverImage: "assets/images/mi-foto.jpg", // O un enlace web
  gallery: ["assets/images/mi-foto.jpg"],
  youtubeId: "", // Si es video, pon el ID de YouTube aquí
  featured: false
},
```

---

## 💻 Cómo Probar la Web en tu Computadora (Localmente)

Puedes abrir directamente el archivo `index.html` haciéndole doble clic para verlo en tu navegador favorito (Chrome, Edge, Firefox).

O si tienes Python instalado, puedes abrir una consola en la carpeta y ejecutar:
```bash
python -m http.server 8000
```
Y abrir en tu navegador: `http://localhost:8000`

---

¡Disfruta tu nueva página web y que sigan las cumbres en Morán y todo Lara! 🏔️🇻🇪
