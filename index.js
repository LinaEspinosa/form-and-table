const $formUser = document.getElementById('user')
const $nombre = document.getElementById('nombre')
const $apellido = document.getElementById('apellido')
const $telefono = document.getElementById('telefono')
const $correo = document.getElementById('correo')
const $data =document.getElementById('table-body')

$formUser.addEventListener('submit',(event) => {
    event.preventDefault()

const nombre = $nombre.value
const apellido = $apellido.value
const telefono = $telefono.value
const correo = $correo.value

if (nombre.trim() === '' )

})