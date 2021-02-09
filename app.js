//Variables
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const enviar = document.querySelector('.boton');
const formu = document.getElementById('formulario');
const resultado = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//Eventos
nombre.addEventListener('blur', getValidacion);
telefono.addEventListener('blur', getValidacion);
email.addEventListener('blur', getValidacion);
formu.addEventListener('submit', getSubmit);
//Atributos
getAtributo();
function getAtributo() {
	enviar.disabled = true;
	enviar.style.opacity = '.5';
	enviar.style.cursor = 'no-drop';
}

//Funciones
function getValidacion(e) {
	if (e.target.value) {
		//Quita los cuadros de errores
		const campo = document.querySelector('p.campos');
		if (campo) {
			campo.remove();
		}

		e.target.classList.remove('error');
		e.target.classList.add('correcto');
	} else {
		e.target.classList.remove('correcto');
		e.target.classList.add('error');
		enviar.style.opacity = '1';
		enviar.style.cursor = 'pointer';
		enviar.disabled = false;

		mostrarError('Todos los campos son obligatorios');
	}

	if (e.target.type == 'email') {
		if (!resultado.test(e.target.value)) {
			e.target.classList.remove('correcto');
			e.target.classList.add('error');
			const campo = document.querySelector('p.campos');
			if (campo) {
				campo.remove();
			}
			mostrarError('Tu email no es valido');
		} else {
			const campo = document.querySelector('p.campos');
			if (campo) {
				campo.remove();
			}

			e.target.classList.remove('error');
			e.target.classList.add('correcto');
		}
	}

	if (
		nombre.value !== '' &&
		telefono.value !== '' &&
		resultado.test(email.value) !== ''
	) {
		enviar.style.opacity = '1';
		enviar.style.cursor = 'pointer';
		enviar.disabled = false;
	}

	console.log(e.target.value);
}
//Funcion enviar
function getSubmit(e) {
	e.preventDefault();

	console.log('enviando...');
}

//Funcion de error
function mostrarError(alerta) {
	const campo = document.querySelector('.campos');
	if (!campo) {
		const mensajeError = document.createElement('p');
		mensajeError.textContent = alerta;
		formu.appendChild(mensajeError);
		mensajeError.classList.add('campos');
	}
}
