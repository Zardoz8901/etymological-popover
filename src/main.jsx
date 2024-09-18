import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { css } from "@pigment-css/react";
import "@pigment-css/react/styles.css";

const rootStyles = css`
  background-color: lightyellow;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

const root = document.getElementById("root");

root.className = rootStyles;

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
