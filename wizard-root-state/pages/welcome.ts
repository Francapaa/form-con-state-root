import {createHeader} from '../components/header'; 
import {createTitle} from '../components/title'; 
import {createSubtitle} from '../components/subtitle'; 
import { createInputToType} from '../components/inputToType';
import {createButton} from '../components/buttonToSend';
import {createFooter} from '../components/footer';
import state from '../src/state'; 


export function welcomePage(): HTMLElement{

  const containerWelcomePage = document.createElement("div"); 
  containerWelcomePage.className = "container-welcome"; 

  const header = createHeader(); 
  const title = createTitle("Te damos la bienvenida a esta pagina"); 
  const subtitle = createSubtitle ("Para continuar ingresa tu nombre"); 
  const input = createInputToType ("Nombre");
  const buttonToSend = createButton ("Comenzar"); 
  const footer = createFooter(); 

  const inputElement = input.querySelector(".input-element") as HTMLInputElement; 

  buttonToSend.addEventListener("click", () => {
    const nombreIngresado = inputElement.value.trim(); 

    if (nombreIngresado !== ""){
        state.setState({nombre: nombreIngresado}); 
        location.hash = "/form"; 
    }
    else {
      alert("Por favor ingrese un nombre"); 
    }
  })

  containerWelcomePage.appendChild(header);
  containerWelcomePage.appendChild(title);
  containerWelcomePage.appendChild(subtitle);
  containerWelcomePage.appendChild(input);
  containerWelcomePage.appendChild(buttonToSend);
  containerWelcomePage.appendChild(footer);
  

  return containerWelcomePage;  
}