// Importar módulos
import { Cursos } from './Cursos.js'
import { Alumno } from './Alumno.js'
import { Profesor } from './Profesor.js'

// variable para crear la "id" curso1,curso2 etc.
let i = 0

// acceder al elemento de HTML
const formularioAlumno = document.getElementById('formularioAlumno')
const terminarAlumno = document.getElementById('terminarAlumno')
formularioAlumno.style.display = 'none'
const formularioProfesor = document.getElementById('formularioProfesor')
formularioProfesor.style.display = 'none'
const formularioCursos = document.getElementById('formularioCursos')

// acceder al formulario Cursos
// escuchar el envio del formulario
formularioCursos.addEventListener('submit', evento => {

        // hacer que el formulario no se ejecute
        evento.preventDefault()

        // guardar el FORMULARIO
        // recoger el formulario entero
        const formObtenido = evento.target

        // crear el nuevo curso
        const curso = new Cursos(formObtenido.nombreCurso.value, formObtenido.rutaImagen.value, formObtenido.cantidadHoras.value)

        // mostrar curso creando elemnto html "section" por cada curso
        i++
        const seccion = document.getElementById('cursos')
        const indice = document.createElement('section')
        indice.setAttribute('id', `curso${i}`)
        indice.classList.add('curso')
        seccion.appendChild(indice)
        const elemCard = document.getElementById(`curso${i}`)
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
    <img src="${curso.getPoster()}"/>
    <h3>${curso.getNombre()}</h3>
    <h5>Cantidad de horas: ${curso.getClases()}h.</h5>
    `
        elemCard.appendChild(card)

        // refrescar formulario
        formObtenido.reset()

        //eliminar formulario cursos y traer profesor
        formularioCursos.style.display = 'none'

        // traer formulario profesor
        formularioProfesor.style.display = 'inherit'
    })
    //acceder al formulario Profesor
    //escuchar el envio del formulario o final de formulario
formularioProfesor.addEventListener('submit', evento => {

    // hacer que el formulario no se ejecute
    evento.preventDefault()

    // guardar el FORMULARIO
    // recoger el formulario entero
    const formObtenido = evento.target

    // crear el nuevo curso
    const profesor = new Profesor(formObtenido.nombre.value, formObtenido.apellidos.value, formObtenido.email.value, formObtenido.horario.value)

    // mostrar profesor
    const elemCard = document.getElementById(`curso${i}`)
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <h4>Profesor: ${profesor.getNombre()} ${profesor.getApellidos()}</h4>
    <h5>Email: ${profesor.getEmail()}</h5>
    <h5>Horario: ${profesor.getHorario()}</h5>
    `
    elemCard.appendChild(card)

    // refrescar formulario
    formObtenido.reset()

    //terminar formulario profesor y traer alumno
    formularioProfesor.style.display = 'none'
    formularioAlumno.style.display = 'inherit'

})

//acceder al formulario Alumno
//escuchar el envio del formulario o final de formulario
formularioAlumno.addEventListener('submit', evento => {

    // hacer que el formulario no se ejecute
    evento.preventDefault()

    // guardar el FORMULARIO
    // recoger el formulario entero
    const formObtenido = evento.target

    // crear el nuevo curso
    const alumno = new Alumno(formObtenido.nombre.value, formObtenido.apellidos.value, formObtenido.email.value, formObtenido.nivel.value)

    // mostrar alumno
    const elemCard = document.getElementById(`curso${i}`)
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <h4>Alumno: ${alumno.getNombre()} ${alumno.getApellidos()}</h4>
    <h5>Email: ${alumno.getEmail()}</h5>
    <h5>Nivel: ${alumno.getNivel()}</h5>
    `
    elemCard.appendChild(card)

    // refrescar formulario
    formObtenido.reset()
})

//eliminar formulario alumno y traer curso
terminarAlumno.addEventListener('click', evento => {
    formularioAlumno.style.display = 'none'
    formularioCursos.style.display = 'inherit'
})