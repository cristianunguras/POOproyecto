export class Usuario {
    constructor(nombre, apellidos, email) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.email = email
    }

    // getters
    getNombre() {
        return this.nombre
    }
    getApellidos() {
        return this.apellidos
    }
    getEmail() {
        return this.email
    }

    // setters
    setNombre(nombre) { this.nombre = nombre }
    setApellidos(apellidos) { this.apellidos = apellidos }
    setEmail(email) { this.email = email }
}