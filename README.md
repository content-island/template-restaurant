# Pizzeria Landing

Sitio web de landing page para **La Dolce Tavola** - Pizzeria italiana auténtica.

## 🚀 Tecnologías

- [Astro](https://astro.build) v5.x
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com) v4.x
- [Content Island](https://contentisland.net) - CMS headless

## 📁 Estructura del proyecto

```
src/
├── common/
│   ├── components/     # Componentes UI reutilizables
│   └── models/         # Interfaces TypeScript
├── layouts/
│   ├── api/            # Llamadas a Content Island API
│   ├── components/     # Header, Footer
│   └── Layout.astro    # Layout principal
├── lib/
│   └── client.ts       # Cliente de Content Island
├── pages/
│   └── index.astro     # Página principal
├── pods/
│   └── home/           # Secciones de la página de inicio
└── styles/
    └── global.css      # Tokens CSS + Tailwind
```

## 🎨 Design System

Los tokens de diseño están basados en el archivo `landing-pizzeria.pen` y siguen la documentación en `design-system-docs/`.

### Colores principales
- **Primary**: Amber (#b45309)
- **Secondary**: Violet (#7c3aed)

### Tipografía
- **Títulos**: Libre Baskerville (serif)
- **Cuerpo**: Inter (sans-serif)

### Espaciado responsivo
Usa variables CSS con `clamp()` para escalado fluido entre mobile (360px) y desktop (1440px).

## 🛠️ Desarrollo

### Requisitos previos
- Node.js 18+
- npm o pnpm

### Instalación

```bash
npm install
```

### Variables de entorno

Crea un archivo `.env` con:

```env
CONTENT_ISLAND_TOKEN=tu_token_aqui
```

### Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera sitio estático en `./dist/` |
| `npm run preview` | Preview del build |

## 📝 Notas de Content Island

Los modelos de contenido esperados:

- `SiteSettings` - Configuración general del sitio
- `Theme` - Colores y tipografías
- `Navigation` - Enlaces de navegación
- `HeroSection` - Contenido del hero
- `MenuSection` - Sección de la carta
- `RestaurantSection` - Sección del restaurante
- `LocationSection` - Dirección y horarios
- `ContactSection` - Datos de contacto
- `FooterSection` - Pie de página

### TODO: Revisar mapeo de contenido

Algunos campos pueden no coincidir exactamente con el diseño:

- `RestaurantSection.images` - Verificar estructura de imágenes
- `LocationSection.hours` - Puede ser string o array
- `LocationSection.address` - Estructura anidada

## 📄 Licencia

Proyecto privado - Todos los derechos reservados.
