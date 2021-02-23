import { Usuario } from './Usuario.js'
export class Profesor extends Usuario {
    constructor(nombre, apellidos, email, horario) {
        // llamar al método constructor de Usuario, super constructor
        super(nombre, apellidos, email)
            // SOLO de Profesor
        this.horario = horario
    }

    // getters
    getHorario() {
        return this.horario
    }

    // setters
    setHorario(horario) { this.horario = horario }
}