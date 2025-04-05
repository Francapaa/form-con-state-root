import { initRouter } from "./root";

const root = document.querySelector("#app");
if (root instanceof HTMLElement) { // mas seguridad 
  initRouter(root);
}