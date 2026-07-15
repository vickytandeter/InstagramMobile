# InstagramMobile

Quedó con tema oscuro como el Instagram de verdad, con feed, historias, perfil y el detalle de las publicaciones.

---

## Inicialización

Necesitás tener Node instalado y la app de Expo Go en el celular.

Comandos (en la terminal de visual estudio luego de clonar el proyecto de github - main branch)
1. npm install
2. npx expo start (--tunnel si el celular y la computadora están en redes distintas)

Te va a tirar un QR en la terminal/navegador. Lo escaneás con Expo Go y listo, se abre la app en el cel. Si querés probarlo en la compu directamente apretás `w` cuando esté corriendo el Metro y se abre en el navegador.

No hace falta configurar nada más, la key de la API ya está puesta en el código (`src/services/api.js`).

---

## Estructura del proyecto

No usamos el Expo Router (el de rutas por carpetas), armamos la navegación a mano con React Navigation (Stack Navigator). Por eso no hay una carpeta `app/` de rutas como tal, el "punto de entrada" de la navegación está en `src/app/index.jsx`.

```
InstagramMobile-main/
├── App.js                 # arranca todo, importa src/app/index.jsx (no tiene contenido propio, ya que recibe todo el contenido necesario de index.js, desde donde importa el ocmponente App)
├── index.js                
├── app.json                # config de expo (icono, splash, etc)
│
├── assets/                 # icono y splash de la app
├── Fotos de Referencia/    # capturas de instagram que usamos de guía para copiar el diseño
│
└── src/
    ├── app/
    │   └── index.jsx        # acá está armado el Stack Navigator, el status bar y el SafeArea
    │
    ├── services/
    │   └── api.js            # las funciones que traen los datos necesarios de la API de los gatos con axios
    │
    ├── data/                 # datos fijos (inventados) para historias y comentarios
    │   ├── historias.js
    │   ├── comentarios.js
    │   └── datos.js           
    │
    └── components/
        ├── Header.jsx        
        ├── Footer.jsx         # footer con navegacion entre Perfil del usuario y feed principal
        │
        ├── Feed/
        │   ├── Feed.jsx             # pantalla principal, pide los posts a la api
        │   ├── Publicacion.jsx      # cada post del feed
        │   ├── Historias.jsx        # el carrusel de historias arriba del feed
        │   └── ComentariosModal.jsx # el modal que se abre con los comentarios
        │
        └── Perfil/
            ├── PagPerfil.jsx          # pantalla de perfil
            ├── InfoPerfil.jsx         # el bloque de arriba (foto, bio, numeritos)
            ├── Destacadas.jsx         # historias destacadas del perfil
            ├── Historia.jsx           # una historia destacada individual
            ├── ListaPublicaciones.jsx # la grilla de fotos del perfil
            ├── PublicacionPerfil.jsx  # cada cuadradito de la grilla
            ├── FeedPerfil.jsx         # cuando tocás una foto, te lleva a este feed vertical
            └── DetallePublicacion.jsx # la publicación en grande con el like y todo
```

---

## Estados que usamos (useState, etc)

| Dónde | Qué guarda |
|---|---|
| Feed | las publicaciones que trae de la api, y si está cargando |
| Publicacion (feed) | si le diste like, cuántos likes tiene, si el modal de comentarios está abierto |
| Historias | la lista de historias |
| ComentariosModal | los comentarios, lo que estás escribiendo, y un flag para no pedir los avatares de nuevo cada vez que lo abrís |
| PagPerfil | el perfil armado (con useMemo, no useState) |
| Destacadas | la lista de destacadas |
| ListaPublicaciones | las publicaciones de la grilla, si carga, si hubo error |
| DetallePublicacion | si le diste like, cuántos likes, si el modal de comentarios está abierto |

Todos los datos se guardan localmente en cada componente. Lo que se pasa entre pantallas (el usuario que tocaste, la publicación, etc) va por los params de la navegación.

---

## Sobre el diseño

No usamos Figma, directamente nos guiamos con capturas de pantalla de la app real de Instagram que están en la carpeta `Fotos de Referencia` (perfil, footer y las publicaciones).
