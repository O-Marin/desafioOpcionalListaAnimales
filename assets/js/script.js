import {Propietario, Animal, Mascota} from './propietario.js';





function recibeDatos(){
    let propietario = document.querySelector("#propietario").value;
    let direccion = document.querySelector("#direccion").value;
    let telefono = document.querySelector("#telefono").value;
    let nombreMascota = document.querySelector("#nombreMascota").value;
    let tipo = document.querySelector("#tipo").value;
    let motivo = document.querySelector("#enfermedad").value;

    if(tipo === 'perro'){
        let perro = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, motivo);
        return perro;
    }else if(tipo === 'gato'){
        let gato = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, motivo);
        return gato;
    }else if(tipo === 'conejo'){
        let conejo = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, motivo);
        return conejo;
    }

}

let formulario = document.querySelector("form");
let resultado = document.querySelector("#resultado");


formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    let paciente = recibeDatos();
    
   resultado.innerHTML = `<li> ${paciente.datosPropietario()} </li>  <li> ${paciente.getTipo()} ${paciente.nombreMascota} ${paciente.motivo}  </li>`


    
   
})


