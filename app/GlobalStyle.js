import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --bg: white;
    --fg: black;
    --heading: red;
    --footer-bg: black;
    --footer-fg: white;
    --primary-btn-bg: blue;
    --primary-btn-fg: white;
    --primary-btn-hover: white;
    --secondary-btn-bg: green;
    --secondary-btn-fg: red;
    --secondary-btn-hover: gray;
    --item-fg: black;
    --quote-fg: rgb(100, 100, 250);
    --quote-bg: rgba(100, 100, 240,0.3);
    --primary-border:rgb(100, 100, 250);
    --emphasis-bg: rgba(240, 255, 0, 0.95);
    --emphasis-fg: black;

    --code-bg: darkgray;
    --code-fg: white;
    --link-bg: black;
    --link-fg: white;
    --strong-bg: rgba(250, 15, 0, 0.75);
    
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
[data-theme='dark']{
    --bg: #343434;
    --fg: white;
    --footer-bg: white;
    --footer-fg: black;
    --heading: lightblue;
    --primary-btn-bg: blue;
    --primary-btn-fg: white;
    --primary-btn-hover: white;
    --secondary-btn-bg: green;
    --secondary-btn-fg: red;
    --secondary-btn-hover: gray;
    --item-fg: white;
    --quote-fg: rgb(100, 100, 200);
    --quote-bg: white;
    --primary-border:rgb(100, 100, 250);
    --emphasis-bg: rgba(240, 255, 0, 0.95);
    --emphasis-fg: black;
    --code-bg: cyan;
    --code-fg: black;
    --link-bg: magenta;
    --link-fg: white;
    --strong-bg: rgba(250, 215, 230, 0.75);

}

[data-theme='dark'] [data-hide-on-theme='dark'],
[data-theme='light'] [data-hide-on-theme='light'] {
  display: none;
}`;
export default GlobalStyle;
