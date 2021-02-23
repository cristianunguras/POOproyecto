import { Usuario } from './Usuario.js'
export class Alumno extends Usuario {
    constructor(nombre, apellidos, email, nivel) {
        // llamar al método constructor de Usuario, super constructor
        super(nombre, apellidos, email)
            // SOLO de Alumno
        this.nivel = nivel
    }

    // getters
    getNivel() {
        return this.nivel
    }

    // setters
    setNivel(nivel) { this.nivel = nivel }
}