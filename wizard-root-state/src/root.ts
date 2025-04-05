import {welcomePage} from '../pages/welcome';
import {createFormPage} from '../pages/form'; 


export function initRouter(container: HTMLElement){

  function goTo (path: string){
    location.hash = path;
    }

    function handleRoute( route: String){
    container.innerHTML = "";

    if (route === "/welcome"){
      const page = welcomePage(); 
      container.appendChild(page);
    }
    if (route === "/form"){
      const page = createFormPage();
      container.appendChild(page); 
    }
    if (route === "/"){
      goTo("/welcome"); 
    }
    }
    window.addEventListener("hashchange", () =>{
      handleRoute(location.hash.slice(1));
    }); 

    handleRoute(location.hash.slice(1) || "/welcome"); 
}