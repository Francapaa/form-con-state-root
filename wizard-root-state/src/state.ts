// El state es un objeto centralizado donde guardás la información importante de tu app. 
// En este caso, por ejemplo:
//El nombre que el usuario ingresó
//Su email
//Su comida favorita
//La opción seleccionada (como “Piedra”, “Papel”, “Tijera”)
//Entonces, en vez de pasar esos datos entre componentes, los guardás en un solo lugar (el state) y los podés leer desde cualquier parte.


type AppState = {
  nombre: string;
  email: string;
  comidaFavorita: string;
  opcionSeleccionada: string;
}; //LAS OPCIONES DE ACA DEBEN SER IGUALES A LAS DE LA DATA 



const state = {
data:{
  nombre: "",
  email: "",
  comidaFavorita: "",
  opcionSeleccionada: ""
}as AppState,
listeners: [] as Array <() => void>,
getState (){
  return this.data; 
},
setState(newData: Partial <AppState>){ // PERMITE PASAR SOLO UNA PARTE DEL ESTADO no necesariamente todo
this.data = {...this.data, ...newData}; // spread operator(...) agrega los nuevos datos(newData)
                                        // y los suma a los que ya tenia (this.data)
},
subscribe(callback: () => void){
  this.listeners.push(callback);
}
}


export default state; 