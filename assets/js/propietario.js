class Propietario{
    constructor(nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario(){
        return `El Nombre del Duenio es: ${this.nombre} El domicilio es: ${this.direccion} y el Numero de Telefono de contacto: \n${this.telefono}`
    }
}


class Animal extends Propietario{
    constructor (nombre,direccion,telefono,tipo){
        super(nombre,direccion,telefono)
        this.tipo = tipo;
    }

    getTipo(){
        return `El tipo de Animal es un: ${this.tipo}`
    }
}

class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreMascota, motivo){
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota;
        this._motivo = motivo;
    }

    get nombreMascota(){
        return `El nombre de la Mascota es ${this._nombreMascota}`;
    }

    set nombreMascota(nombreMascota){
        this._nombreMascota = nombreMascota;
    }

    get motivo(){
        return `la enfermedad es ${this._motivo}`; 
    }

    set motivo(motivo){
        this._motivo = motivo;
    }
}




export {Propietario,Animal,Mascota};