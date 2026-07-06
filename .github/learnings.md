# Learnings - Adding GitHub links to Sidebar and Footer

## Starlight Component Overrides
- To add custom content to the sidebar or footer while keeping default functionality, create a custom component and import the default one from `@astrojs/starlight/components/[Component].astro`.
- In `astro.config.ts`, register these in the `starlight.components` object.

## Sidebar Persistence
- When overriding the Sidebar, wrapping custom content inside `<SidebarPersister>` (imported from `@astrojs/starlight/components/SidebarPersister.astro`) helps maintain the scroll position and state across navigations.

## Styling Starlight Components
- Use Starlight's CSS variables like `--sl-color-gray-3`, `--sl-color-white`, and `--sl-color-hairline` to ensure visual consistency with the theme (both light and dark modes).
- The `sl-flex` class is a handy utility for flexbox layouts in Starlight.
