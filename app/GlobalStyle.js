import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --bg: white;
    --fg: #2D2D2D; /* Un negro ligeramente gris para suavizar el contraste */
    --heading: #B80000; /* Un rojo más suave para los encabezados */
    --footer-bg: #2D2D2D; /* Fondo oscuro para el pie de página */
    --footer-fg: white;
    --primary-btn-bg: #0056B3; /* Un azul más profundo y agradable */
    --primary-btn-fg: white;
    --primary-btn-hover: #0041A0; /* Hover ligeramente más oscuro */
    --secondary-btn-bg: #28A745; /* Un verde más suave para botones secundarios */
    --secondary-btn-fg: white; /* Contraste más limpio */
    --secondary-btn-hover: #218838;
    --item-fg: #2D2D2D; /* Color de texto general */
    --quote-fg: #1E90FF; /* Un azul vívido pero claro */
    --quote-bg: #F0F8FF; /* Un fondo azul claro muy suave */
    --primary-border: #1E90FF; /* Borde azul consistente con las citas */
    --emphasis-bg: #FFFACD; /* Un amarillo suave */
    --emphasis-fg: #2D2D2D;
    --code-bg: #F5F5F5; /* Fondo claro para código */
    --code-fg: #C7254E; /* Un rojo/magenta tenue */
    --link-bg: transparent;
    --link-fg: #007BFF; /* Un azul claro pero legible */
    --strong-bg: #FFD700; /* Un dorado suave */
    --theme-font: #0a1ef5;
    --border-stroke: #0a1ef5;
    
a {
  text-decoration: none;
}
body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
    background-color: var(--code-bg);
    color: var(--code-fg);
    padding: 3px 2px;
    border-radius: 4px;
    font-weight: bold;
}
    
}
[data-theme='dark'] {
    --bg: #343434; /* Mantiene el fondo oscuro */
    --fg: #EAEAEA; /* Un gris claro para mejorar la lectura */
    --heading: #87CEEB; /* Un azul cielo suave para títulos */
    --footer-bg: #2D2D2D; /* Fondo oscuro para el pie de página */
    --footer-fg: #EAEAEA; /* Contraste ligero en el pie de página */
    --primary-btn-bg: #1C7ED6; /* Azul más brillante para botones principales */
    --primary-btn-fg: white;
    --primary-btn-hover: #1864AB;
    --secondary-btn-bg: #38D9A9; /* Un verde más relajado */
    --secondary-btn-fg: #343434;
    --secondary-btn-hover: #2B8A6E;
    --item-fg: #EAEAEA; /* Color de texto principal */
    --quote-fg: #87CEEB; /* Azul cielo para citas */
    --quote-bg: #1F2933; /* Un fondo oscuro pero claro para citas */
    --primary-border: #1C7ED6; /* Borde consistente con botones primarios */
    --emphasis-bg: rgba(240, 255, 0, 0.8); /* Un amarillo fuerte para énfasis */
    --emphasis-fg: #343434;
    --code-bg: #282C34; /* Fondo gris oscuro para bloques de código */
    --code-fg: #E06C75; /* Rojo suave para palabras reservadas */
    --link-bg: transparent;
    --link-fg: #61AEEE; /* Azul claro para enlaces */
    --strong-bg: rgba(250, 128, 114, 0.7); /* Salmón claro para negritas */
    --theme-font: #FFF4B7;
    --border-stroke: #0a1ef5;
}


[data-theme='dark'] [data-hide-on-theme='dark'],
[data-theme='light'] [data-hide-on-theme='light'] {
  display: none;
}`;
export default GlobalStyle;
