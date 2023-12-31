/* funcion busqueda */
const buscarButton = document.getElementById('buscarButton');

buscarButton.addEventListener('click', buscarPeli);

let peliculastorage = JSON.parse(localStorage.getItem('peliculas'));

function buscarPeli(e) {
	e.preventDefault();

	const inputBusqueda = document.getElementById('busqueda').value.toLowerCase();

	const peliculasFiltradas = peliculastorage.filter((pelicula) => pelicula.titulo.toLowerCase().includes(inputBusqueda));

	const peliculaEncontrada = JSON.stringify(peliculasFiltradas);
	if (peliculasFiltradas != '') {
		const titulos = peliculasFiltradas.map((pelicula) => pelicula.titulo).join(', ');
		const imagen = peliculasFiltradas.map((pelicula) => pelicula.img).join(', ');
		const descripcion = peliculasFiltradas.map((pelicula) => pelicula.descripcion).join(', ');
		Swal.fire({
			title: `${titulos}`,
			text: `${descripcion}`,
			imageUrl: `${imagen}`,
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: 'imagen pelicula',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Ver mas!',
			cancelButtonText: 'Volver',
		}).then((result) => {
			if (result.isConfirmed) {
				window.location.href = '../pages/error4042.html';
			}
		});
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Pelicula no encontrada!',
		});
		return;
	}
}
class Usuario {
	constructor(id, nombre, email, password) {
		this.id = id;
		this.nombre = nombre;
		this.email = email;
		this.password = password;
	}
}

const validarUsuario = document.getElementById('validarUsuario');

const formError = document.querySelector('#formError');

let usuarios = [];
document.addEventListener('DOMContentLoaded', function () {
	usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
});

document.getElementById('validarRegistro').addEventListener('click', validarRegistro);
validarUsuario.addEventListener('submit', validarRegistro);
function validarRegistro(e) {
	e.preventDefault();

	const id = Date.now();
	const nombre = document.querySelector('#nombre').value;
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;
	const confirmPassword = document.querySelector('#confirmPassword').value;

	const validarEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	const resultadoValidacion = validarEmail.test(email);
	if (nombre === '' || email === '' || password === '' || confirmPassword === '') {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Todos los campos son obligatorios!',
		});
		return;
	} else if (!resultadoValidacion) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Email no valido!',
		});
		return;
	} else if (password.length < 7) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'La contraseña debe ser mayor a 6 caracteres!',
		});
		return;
	} else if (password !== confirmPassword) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Las contraseñas deben ser iguales!',
		});
		return;
	}

	const existeEmail = usuarios.find(function (usuario) {
		return usuario.email === email;
	});

	if (existeEmail !== undefined) {
		Swal.fire({
			icon: 'error',
			title: 'Usuario Existente',
			text: 'Lo siento el usuario ingresado ya esta registrado!',
		});
		return;
	}
	const newUser = new Usuario(id, nombre, email, password);

	usuarios.push(newUser);
	localStorage.setItem('usuarios', JSON.stringify(usuarios));

	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'Usuario registrado correctamente',
		showConfirmButton: false,
		timer: 1500,
	}).then(() => {
		// Después de mostrar el SweetAlert, redirigir al usuario al formulario de inicio de sesión (login.html)

		window.location.href = 'login.html';

		// Restablecer el formulario después de la redirección
		validarUsuario.reset();
	});
}
