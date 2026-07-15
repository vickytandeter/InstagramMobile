# InstagramMobile — Clon Móvil de Instagram (React Native + Expo)

Trabajo práctico que migra la lógica de un clon de Instagram hecho en React (web) hacia **React Native** con **Expo**, consumiendo imágenes en tiempo real desde **TheCatAPI** para simular los posteos del feed.

---

## Inicialización del proyecto

Requisitos previos: tener **Node.js** instalado y la app **Expo Go** en el celular (o un emulador Android/iOS configurado).

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo de Expo
npx expo start
```

Al ejecutar `npx expo start` se abre el Metro Bundler en el navegador con un código QR:

- **Celular físico:** escanear el QR con la app **Expo Go** (Android) o la cámara (iOS).
- **Emulador Android:** con el bundler corriendo, presionar `a`.
- **Simulador iOS:** con el bundler corriendo, presionar `i` (requiere Mac).
- **Web:** presionar `w`, o correr directamente `npm run web`.

No se necesita ninguna variable de entorno para levantar el proyecto: el consumo de la API de gatos usa una key ya incluida en `src/services/api.js`.

> ⚠️ Nota técnica: esa key está hardcodeada en el código fuente. Funciona para levantar el proyecto tal cual está, pero si el repositorio va a ser público conviene moverla a una variable de entorno (`.env` + `expo-constants` o similar) antes de la entrega final.

---

## Árbol de directorios

El proyecto no usa Expo Router (ruteo por archivos dentro de una carpeta `app/`), sino **React Navigation** con un Stack Navigator armado a mano. La estructura de navegación vive en `src/app/index.jsx`, que cumple el rol de punto de entrada de la app.

```
InstagramMobile-main/
├── App.js                          # Entry point de Expo, re-exporta src/app/index.jsx
├── index.js                        # registerRootComponent (requerido por Expo)
├── app.json                        # Configuración de Expo (ícono, splash, orientación)
├── package.json
│
├── assets/                         # Íconos y splash screen de la app
│   ├── icon.png
│   ├── adaptive-icon.png
│   ├── splash-icon.png
│   └── favicon.png
│
├── Fotos de Referencia/            # Capturas usadas como guía visual del diseño
│   ├── Perfil.jpg
│   ├── footer.jpg
│   └── publicacionPerfil.jpg
│
└── src/
    ├── app/
    │   └── index.jsx               # Configura NavigationContainer, Stack.Navigator,
    │                                # StatusBar y el SafeAreaView raíz de toda la app
    │
    ├── services/
    │   └── api.js                  # Llamadas Axios a TheCatAPI (searchPost, getPostDetail)
    │
    ├── data/                       # Datos fijos (mock) usados como base para historias
    │   │                           # y comentarios, combinados luego con imágenes reales
    │   │                           # traídas de la API
    │   ├── historias.js
    │   ├── comentarios.js
    │   └── datos.js                # (sin uso actualmente en la app)
    │
    └── components/
        ├── Header.jsx              # Barra superior (logo + íconos)
        ├── Footer.jsx              # Barra de navegación inferior (tab bar)
        │
        ├── Feed/
        │   ├── Feed.jsx            # Pantalla principal: trae posts de la API y arma el feed
        │   ├── Publicacion.jsx     # Ítem individual del feed (imagen, likes, acciones)
        │   ├── Historias.jsx       # Carrusel horizontal de historias en la home
        │   └── ComentariosModal.jsx # Modal con el listado de comentarios de un post
        │
        └── Perfil/
            ├── PagPerfil.jsx           # Pantalla de perfil de usuario
            ├── InfoPerfil.jsx          # Avatar, nombre, bio y métricas del perfil
            ├── Destacadas.jsx          # Carrusel de historias destacadas del perfil
            ├── Historia.jsx            # Círculo individual de una historia destacada
            ├── ListaPublicaciones.jsx  # Grilla de publicaciones (FlatList numColumns=3)
            ├── PublicacionPerfil.jsx   # Miniatura individual de la grilla
            ├── FeedPerfil.jsx          # Vista de detalle en formato feed vertical,
            │                           # arrancando en la publicación tocada
            └── DetallePublicacion.jsx  # Card de detalle de una publicación (imagen HD,
                                         # like funcional, acceso a comentarios)
```

---

## Desglose técnico de componentes

### Navegación (`src/app/index.jsx`)
Configura `NavigationContainer` + `createNativeStackNavigator` con tres pantallas registradas: `Feed`, `Perfil` y `FeedPerfil` (`headerShown: false`, porque el header propio lo dibuja `Header.jsx`). También envuelve toda la app en `SafeAreaProvider`/`SafeAreaView` y estiliza la `StatusBar` (`light-content`, fondo negro).

### `Header`
Componente sin props. Barra superior fija con el logo "Instagram" y dos íconos (cámara / agregar publicación). Se reutiliza en `Feed` y en `PagPerfil`.

### `Footer`
Componente sin props. Tab bar inferior fija (`position: absolute`) con 5 accesos: Home (navega a `Feed`), Reels, Mensajes, Buscar y el avatar del usuario (navega a `Perfil`). Usa `useNavigation` de React Navigation para moverse entre pantallas.

### `Feed`
Pantalla principal (`Feed`). Al montarse, pide 15 imágenes de contenido + 15 de avatar a la API (`Promise.all`) y arma un array de "publicaciones" con datos simulados (usuario, fecha, likes, comentarios, reenviados aleatorios). Renderiza todo con `FlatList`, usando `Historias` como `ListHeaderComponent`.

**Props:** `onSelect` (declarada pero sin uso actual — ver sección de limitaciones).

### `Publicacion` (Feed)
Ítem individual del feed. Muestra avatar + usuario (navega al perfil al tocarlo), imagen del post, y la barra de acciones (like, comentario, compartir) con contadores. El botón de comentario abre `ComentariosModal`.

**Props:** `post` (objeto de la publicación), `onSelect`.

### `Historias` (Feed)
Carrusel horizontal de historias en la home. Arranca con datos fijos (`src/data/historias.js`) y, al montarse, reemplaza los avatares por imágenes reales pedidas a la API.

### `ComentariosModal`
Modal deslizable con el listado de comentarios de una publicación (datos fijos de `src/data/comentarios.js`, con avatares reales de la API). Permite escribir y "publicar" un comentario nuevo, que se agrega al estado local con un avatar nuevo pedido a la API. Solo pide los avatares la primera vez que se abre (no al montarse), para no saturar la API con pedidos simultáneos.

**Props:** `visible` (booleano), `onClose` (callback).

### `PagPerfil`
Pantalla de perfil (`Perfil`). Si llega por navegación desde el feed (`route.params`), arma un perfil con esos datos; si no, usa el perfil hardcodeado por defecto. Compone `Header`, `InfoPerfil`, `Destacadas`, `ListaPublicaciones` y `Footer` dentro de un `ScrollView`.

### `InfoPerfil`
Encabezado del perfil: avatar, nombre, biografía corta, métricas (publicaciones/seguidores/seguidos) y botones de "Editar perfil" / "Compartir perfil".

**Props:** `perfil` (opcional, default `PERFIL_HARDCODEADO`).

### `Destacadas`
Carrusel horizontal de historias destacadas del perfil, con el mismo patrón que `Historias`: datos fijos + avatares reales pedidos a la API.

**Props:** `destacadas` (opcional).

### `Historia` (Perfil)
Círculo individual de una historia destacada (o el botón de "Nuevo").

**Props:** `historia`, `onPress`.

### `ListaPublicaciones`
Grilla de publicaciones del perfil. Pide las imágenes a la API con `FlatList` en `numColumns={3}`. Si se llegó desde el feed tocando una publicación puntual, esa publicación se antepone a la lista. Al tocar una miniatura, navega a `FeedPerfil` pasando todo el array de publicaciones y el id de la tocada.

**Props:** `perfil`, `publicacionInicial`.

### `PublicacionPerfil`
Miniatura individual de la grilla del perfil (imagen cuadrada, 1/3 del ancho de pantalla).

**Props:** `publicacion`, `onPress`.

### `FeedPerfil`
Pantalla de detalle: un feed vertical con **todas** las publicaciones del perfil, haciendo scroll automático hasta la que se tocó (`initialScrollIndex`). Cada ítem se renderiza con `DetallePublicacion`.

### `DetallePublicacion`
Card de detalle de una publicación individual: imagen en alta definición, like funcional con `useState` (cambia color/ícono e incrementa el contador al toque), acceso al modal de comentarios y caption.

**Props:** `publicacion`, `usuario`, `avatarUrl`.

### `services/api.js`
Capa de acceso a datos. Usa Axios contra TheCatAPI:
- `searchPost(query, limit)`: trae `limit` imágenes de gatos.
- `getPostDetail(id)`: trae el detalle de una imagen puntual por id (declarada, sin uso actual en la UI).

---

## Estados (hooks) declarados

| Componente | Estado | Hook | Para qué |
|---|---|---|---|
| `Feed` | `publicaciones`, `cargando` | `useState` | Guardar las publicaciones traídas de la API y el spinner de carga |
| `Publicacion` (Feed) | `liked`, `likes`, `mostrarComentarios` | `useState` | Like funcional del post y visibilidad del modal de comentarios |
| `Historias` | `historias` | `useState` | Lista de historias (mock + avatares reales) |
| `ComentariosModal` | `comentarios`, `texto`, `yaCargado` | `useState` | Lista de comentarios, texto del input, y flag para no repetir el pedido a la API cada vez que se abre |
| `PagPerfil` | `perfil` (derivado) | `useMemo` | Arma el objeto de perfil según venga o no desde el feed |
| `Destacadas` | `destacadas` | `useState` | Lista de destacadas (mock + avatares reales) |
| `ListaPublicaciones` | `publicaciones`, `cargando`, `error` | `useState` | Publicaciones de la grilla del perfil y sus estados de carga/error |
| `DetallePublicacion` | `likeado`, `likes`, `mostrarComentarios` | `useState` | Like funcional en la vista de detalle y visibilidad del modal de comentarios |

Todos los `useEffect` del proyecto (en `Feed`, `Historias`, `Destacadas`, `ListaPublicaciones` y `ComentariosModal`) se usan para disparar los pedidos a la API al montar el componente (o, en el caso de `ComentariosModal`, al abrirse por primera vez) y cancelarlos si el componente se desmonta antes de tiempo (flag `activo`).

No hay estado global (Context/Redux/Zustand): todo el estado es local a cada componente, y los datos que se comparten entre pantallas (usuario, foto, publicación tocada) viajan como **parámetros de navegación** (`route.params`) de React Navigation.

---

## Consumo de API

- **Fuente:** [TheCatAPI](https://thecatapi.com/) (`https://api.thecatapi.com/v1/images/search`)
- **Cliente HTTP:** Axios
- **Endpoint usado:** búsqueda de imágenes (`searchPost`), filtrado por raza `beng` (Bengala)
- Todos los pedidos se hacen dentro de `useEffect`, de forma asíncrona, y se cancelan con un flag `activo` si el componente se desmonta antes de que responda la API (evita el warning de "state update on unmounted component").

---

## Referencia visual / Figma

No se usó un archivo de Figma para este proyecto. La guía visual utilizada son capturas de pantalla reales de la app de Instagram, incluidas en la carpeta [`Fotos de Referencia/`](./Fotos%20de%20Referencia/) en la raíz del repositorio:

- `Perfil.jpg` — referencia de la pantalla de perfil
- `publicacionPerfil.jpg` — referencia de la grilla/detalle de publicaciones
- `footer.jpg` — referencia de la barra de navegación inferior

---

## Checklist de requisitos mínimos

- [x] Barra de navegación nativa superior
- [x] Feed dinámico estructurado exclusivamente con `FlatList`
- [x] Mapeo de al menos 10 imágenes asíncronas vía Axios
- [x] Interacciones táctiles con `TouchableOpacity`
- [x] Diseño en cuadrícula de 3 columnas en el perfil
- [x] StatusBar estilizada
- [ ] `StyleSheet.create()` exclusivo (queda un estilo inline en `src/app/index.jsx`)
- [ ] Flujo de navegación completo Feed → Detalle de Publicación → Perfil (hoy solo se llega al detalle desde la grilla del perfil, no tocando un post directamente en el feed principal)
- [ ] SplashScreen e ícono nativo personalizados (actualmente son los assets por defecto de Expo)

---

## Limitaciones conocidas / Pendientes

- La imagen de cada post en el **feed principal** todavía no tiene navegación al detalle (`onSelect` está declarado en `Feed`/`Publicacion` pero no conectado a ningún `onPress`, y `DetallePublicacion` no está registrado como pantalla propia del `Stack.Navigator`). Hoy se llega al detalle únicamente desde la grilla del perfil.
- Falta el campo de **localización simulada** en cada publicación del feed.
- Falta mostrar **etiquetas/hashtags** en la vista de detalle de una publicación.
- El ícono y el splash screen son los que trae Expo por defecto; falta reemplazarlos por un logo propio de la app.
- La API key de TheCatAPI está hardcodeada en `src/services/api.js`; se recomienda moverla a variables de entorno antes de subir el repo como público.
- `src/data/datos.js` no se usa en ningún componente; puede eliminarse.