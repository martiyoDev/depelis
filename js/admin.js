let arrayPeliculas = [
	{
		id: '1233',
		img: '../img/post-1.jpg',
		descripcion:
			'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies',
		categoria: 'Aventuras',
		disponible: 'si',
		titulo: 'Avengers: End Game',
	},

	{
		id: '1234',
		img: '../img/post-2.jpg	',
		descripcion:
			'Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.',
		categoria: 'Aventuras',
		disponible: 'no',
		titulo: 'Fault in our stars',
	},

	{
		id: '1235',
		img: 'https://hips.hearstapps.com/hmg-prod/images/the-hills-have-eyes-608777333-large-6530e777c3e68.jpg?crop=0.995xw:0.956xh;0,0.0436xh&resize=980:*',
		descripcion:
			'Al adentrarse en una zona desértica de acceso restringido donde el Gobierno está experimentando,a auténtica pesadilla.',
		categoria: 'Terror',
		disponible: 'si',
		titulo: 'The hills have eyes',
	},

	{
		id: '1236',
		img: '../img/post-4.jpg',
		descripcion:
			'A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.',
		categoria: 'Aventuras',
		disponible: 'si',
		titulo: 'Blood Diamond',
	},
	{
		id: '1237',
		img: 'https://hips.hearstapps.com/hmg-prod/images/martyrs-833344715-large-6530e80201999.jpg?crop=0.9522012578616352xw:1xh;center,top&resize=980:*',
		descripcion:
			'Mártires cuenta la historia de Lucie, una niña desaparecida en Francia en 1969 que es  a su estado, es incapaz de contar nada de lo sucedido..',
		categoria: 'Terror',
		disponible: 'si',
		titulo: 'Martires',
	},

	{
		id: '1238',
		img: 'https://hips.hearstapps.com/hmg-prod/images/28-days-later-469569758-large-6530e6afa5791.jpg?crop=0.9916666666666667xw:1xh;center,top&resize=980:*',
		descripcion:
			'Tras la propagación de un virus letal que acaba con la vida de miles de personas en Gran Bretaña, unos  Londres.',
		disponible: 'si',
		categoria: 'Terror',
		titulo: '28 dias despues',
	},
	{
		id: '1239',
		img: 'https://hips.hearstapps.com/hmg-prod/images/the-descent-396561570-large-6530e57274f5a.jpg?crop=0.9434464404524285xw:1xh;center,top&resize=980:*',
		descripcion:
			'Cuando un grupo de seis amigas se reúne para emprender una expedición espeleológica, jamás imaginará que su vida',
		disponible: 'si',
		categoria: 'Terror',
		titulo: 'The descent',
	},

	{
		id: '1240',
		img: 'https://www.pequeocio.com/wp-content/uploads/2020/01/jungle-cruise-pelicula-2020-385x550.jpg.webp',
		descripcion:
			'Frank es un capitán de barco que lleva por la selva a la científica Lily Houghton y a su hermano curativos.',
		disponible: 'si',
		categoria: 'Aventuras',
		titulo: 'The Jungle Cruise',
	},
	{
		id: '1241',
		img: 'https://www.pequeocio.com/wp-content/uploads/2019/12/soul-cartel-pelicula-disney-pixar-372x550.jpeg.webp',
		descripcion:
			'Soul es la nueva película de Pixar, que nos narra la historia de Joe Gardnet, un maestro de música de secundaria z.',
		disponible: 'si',
		categoria: 'Aventuras',
		titulo: 'Soul',
	},
	{
		id: '1242',
		img: 'https://cdn.atomix.vg/wp-content/uploads/2015/05/atomix_movies_mad_max_fury_road_furia_en_el_camino_pelicula_post_apocaliptica_george_miller_tom_hardy_charlize_teron_warner_bros_recomendacion_cine_ver_cartelera.png',
		descripcion:
			'Soul es la nueva película de Pixar, que nos narra la historia de Joe Gardnet, un maestro de música de secundaria z.',
		disponible: 'si',
		categoria: 'Accion',
		titulo: 'Mad Max',
	},
	{
		id: '1243',
		img: 'https://es.web.img3.acsta.net/c_310_420/pictures/20/01/09/15/10/0234685.jpg',
		descripcion:
			'Soul es la nueva película de Pixar, que nos narra la historia de Joe Gardnet, un maestro de música de secundaria z.',
		disponible: 'si',
		categoria: 'Accion',
		titulo: '1917',
	},
	{
		id: '1244',
		img: 'https://img.asmedia.epimg.net/resizer/DFTtArUNaW419i0UdsN_OkIvDmU=/736x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/ZUZCKWWLVZN37ACDYH5SJJX4TM.jpg',
		descripcion:
			'Soul es la nueva película de Pixar, que nos narra la historia de Joe Gardnet, un maestro de música de secundaria z.',
		disponible: 'si',
		categoria: 'Accion',
		titulo: '1917',
	},
];

const tablaPeliculas = document.querySelector('.tabla-peliculas tbody');
const formPeliculas = document.querySelector('.formPeliculas');
const formEditarPeliculas = document.querySelector('#formEditarPeliculas');
const formError = document.querySelector('#formError');
formPeliculas.addEventListener('submit', crearPelicula);
formEditarPeliculas.addEventListener('submit', editarPelicula);

function obtenerDatos() {
	const storedData = localStorage.getItem('peliculas');
	if (storedData) {
		return JSON.parse(storedData);
	} else {
		// Si el localStorage está vacío, guarda los datos del array predeterminado en el localStorage
		const defaultData = arrayPeliculas;
		guardarEnLocalStorage(defaultData);
		return defaultData;
	}
}

let peliculas = obtenerDatos();

function guardarEnLocalStorage(data) {
	localStorage.setItem('peliculas', JSON.stringify(data));
}

console.log(peliculas);

class Pelicula {
	constructor(id, titulo, categoria, img, descripcion, disponible) {
		this.id = id;
		this.titulo = titulo;
		this.categoria = categoria;
		this.img = img;
		this.descripcion = descripcion;
		this.disponible = disponible;
	}
}

function cargarTablaPeliculas() {
	tablaPeliculas.innerHTML = '';
	peliculas.map(function (pelicula) {
		let tr = document.createElement('tr');

		tr.innerHTML = `
		<td>${pelicula.id}</td>
		<td>${pelicula.titulo}</td>
		<td>${pelicula.categoria}</td>
		<td>
		<input
		class="form-check-input"
		type="checkbox"
		value=""
		id="flexCheckChecked"
	/>
		</td>
		<td>
			<button class="btn btn-secondary" onclick="mostrarEditarPelicula(${pelicula.id})"> <i class="fa fa-pen-square"></i></button>

			
			<button class="btn btn-secondary" id="like" onclick="cambiarImagen(${pelicula.id})"><i class="fa fa-star"></i></button>
			
			<button class="btn btn-secondary" onclick="borrarPelicula(${pelicula.id})"><i class="fa fa-trash"></i></button>

			</td>
		
		`;
		tablaPeliculas.appendChild(tr);
	});
	/* cargarItemPaginacion(); */
}

cargarTablaPeliculas();

function crearPelicula(e) {
	e.preventDefault();

	const id = Date.now();
	const titulo = document.querySelector('#titulo').value;
	const categoria = document.querySelector('#categoria').value;
	const img = document.querySelector('#img').value;
	const descripcion = document.querySelector('#descripcion').value;

	/* falta validar */
	if (titulo === '' || categoria === '' || img === '' || descripcion === '') {
		mostrarError('Todos los campos son requeridos');
	} else if (titulo.length < 3) {
		mostrarError('El titulo debe tener mas de 3 caracteres');
		return;
	} else {
		Swal.fire({
			icon: 'success',
			title: 'Pelicula guardada',
			text: 'Pelicula guradada exitosamente!',
		});
	}
	const newPelicula = new Pelicula(id, titulo, categoria, img, descripcion);

	peliculas.push(newPelicula);

	localStorage.setItem('peliculas', JSON.stringify(peliculas));

	formPeliculas.reset();

	cargarTablaPeliculas();
}

function mostrarError(mensaje) {
	formError.textContent = mensaje;
	formError.classList.add(
		'text-white',
		'bg-danger',
		'w-15',
		'fs-5',
		'm-1',
		'p-1',
		'text-center'
	);

	setTimeout(() => {
		formError.textContent = '';
		formError.classList.remove(
			'text-white',
			'bg-danger',
			'w-15',
			'fs-5',
			'm-1',
			'p-1',
			'text-center'
		);
	}, 5000);
}

function mostrarEditarPelicula(id) {
	/* console.log(id); */
	const pelicula = peliculas.find(function (p) {
		return p.id == id;
	});

	document.querySelector('#editarTitulo').value = pelicula.titulo;
	document.querySelector('#editarCategoria').value = pelicula.categoria;
	document.querySelector('#editarImagen').value = pelicula.img;
	document.querySelector('#editarDescripcion').value = pelicula.descripcion;
	formEditarPeliculas.setAttribute('data-id', id);

	document.querySelector('#editarModal').style.display = 'block';
}

function editarPelicula(e) {
	e.preventDefault();
	const tituloEditar = document.querySelector('#editarTitulo').value;
	const categoriaEditar = document.querySelector('#editarCategoria').value;
	const imagenEditar = document.querySelector('#editarImagen').value;
	const descripcionEditar = document.querySelector('#editarDescripcion').value;

	/* falta validar  */

	if (
		tituloEditar === '' ||
		!categoriaEditar ||
		!imagenEditar ||
		!descripcionEditar
	) {
		mostrarError('Todos los campos son requeridos');
		return;
	} else if (tituloEditar.length < 3) {
		mostrarError('El titulo debe tener mas de 3 caracteres');
		return;
	} else {
		Swal.fire({
			icon: 'success',
			title: 'Pelicula editada',
			text: 'Pelicula editada exitosamente!',
		});
	}

	const id = formEditarPeliculas.getAttribute('data-id');
	const peliculaIndex = peliculas.findIndex(function (pelicula) {
		return pelicula.id == parseInt(id);
	});

	peliculas[peliculaIndex].titulo = tituloEditar;
	peliculas[peliculaIndex].categoria = categoriaEditar;
	peliculas[peliculaIndex].imagen = imagenEditar;
	peliculas[peliculaIndex].descripcion = descripcionEditar;

	document.querySelector('#editarModal').style.display = 'none';

	localStorage.setItem('peliculas', JSON.stringify(peliculas));

	cargarTablaPeliculas();
}

function borrarPelicula(id) {
	peliculas = peliculas.filter(function (pelicula) {
		return pelicula.id !== id;
	});

	localStorage.setItem('peliculas', JSON.stringify(peliculas));

	cargarTablaPeliculas();
}

/* boton cerrar del modal */
document.getElementById('btn-cerrar').addEventListener('click', () => {
	console.log('cerrar');
	document.querySelector('#editarModal').style.display = 'none';
});

function cambiarImagen(id) {
	const pelicula = peliculas.find(function (p) {
		return p.id == id;
	});

	document.getElementById('like').classList.remove('text-secondary');
	document.getElementById('like').classList.add('text-warning');

	/* cambiar imagen de cabecera */
	const header = (document.querySelector('header').style.backgroundImage =
		'url(${pelicula.img})');
	console.log(header);

	/* header.classList.add(''); */
}

/* document.getElementById('like').onclick = function () {
	cambiarImagen();
}; */

// paginacion

/*
//variables para la paginación
let limite = 5;
let desde = 0;
let paginas = peliculas.length / limite;
let paginaActiva = 1;

let arreglo = peliculas.slice(desde, limite);

const cargarItemPaginacion = () => {
	document.querySelector('#items').innerHTML = '';

	for (let index = 0; index < paginas; index++) {
		const item = document.createElement('li');
		item.classList = `page-item ${paginaActiva == index + 1 ? 'active' : ''}`;
		const enlace = `<button class="page-link" onclick="pasarPagina(${index})">${
			index + 1
		}</button>`;

		item.innerHTML = enlace;
		document.querySelector('#items').append(item);
	}
};

const modificarArregloPeliculas = () => {
	arreglo = peliculas.slice(desde, limite * paginaActiva);
	cargarTablaPeliculas();
};

window.pasarPagina = (pagina) => {
	paginaActiva = pagina + 1;
	desde = limite * pagina;

	if (desde <= peliculas.length) {
		modificarArregloPeliculas();
	}
};

window.nextPage = () => {
	if (paginaActiva < paginas) {
		desde += 5;
		paginaActiva++;
		modificarArregloPeliculas();
	}
};

window.previusPage = () => {
	if (desde > 0) {
		paginaActiva--;
		desde -= 5;
		modificarArregloPeliculas();
	}
}; */
// fin paginacion