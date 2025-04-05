import {createHeader} from '../components/header'; 
import {createTitle} from '../components/title'; 
import {createSubtitle} from '../components/subtitle'; 
import { createInputToType} from '../components/inputToType';
import { createSelect } from '../components/select';
import {createButton} from '../components/buttonToSend';
import {createFooter} from '../components/footer';
import state from '../src/state'; 




export function createFormPage (){

const containerFormPage = document.createElement("div"); 
const header = createHeader ();
const currentState = state.getState(); 
const title = createTitle (`Hola ${currentState.nombre}`);
const subtitle = createSubtitle("Necesitamos algunos datos mas");
const inputDeEmail = createInputToType("Email");
const inputDeComidaFavorita = createInputToType("Comida favorita"); 
const seleccion = createSelect("Elige alguna de estas opciones", ["Piedra", "Papel", "Tijera"]); 
const buttonToSend = createButton ("Enviar");
const footer = createFooter ();

const inputEmail = inputDeEmail.querySelector(".input-element") as HTMLInputElement;
const comidaFavorita = inputDeComidaFavorita.querySelector(".input-element") as HTMLInputElement; 
const opciones = seleccion.querySelector (".select-element") as HTMLSelectElement;

buttonToSend.addEventListener("click", () => {
  const email = inputEmail.value.trim();
  const comida = comidaFavorita.value.trim(); 
  const opcion = opciones.value; 

  if (email && comida && opcion){
    state.setState({
      email: email,
      comidaFavorita: comida,
      opcionSeleccionada: opcion
    });
  }
  else {
    alert("Debes completar todos los campos requeridos"); 
  }
})

containerFormPage.appendChild(header);
containerFormPage.appendChild(title); 
containerFormPage.appendChild(subtitle);
containerFormPage.appendChild(inputDeEmail);
containerFormPage.appendChild(inputDeComidaFavorita);
containerFormPage.appendChild(seleccion);
containerFormPage.appendChild(buttonToSend);
containerFormPage.appendChild(footer);


return containerFormPage; 
}