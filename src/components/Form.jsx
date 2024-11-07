import { useState } from 'react';
import Card from './Card';
import FormStyles from '../styles/Form.module.css';

const Form = () => {
	const [gato, setGato] = useState({
		nombre: '',
		alias: '',
		peso: '',
	});

	//* No se me ocurrió otra manera, ya que al cambio de los campos, la Card tambien se actualizaba, y
	//* claramente ese no es el comportamiento deseado
	const [gatoVal, setGatoVal] = useState(null);
	const [error, setError] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		//* Atencion, tambien verifica si el peso gatuno es numerico
		if (gato.nombre.length >= 3 && gato.alias.length >= 6 && !isNaN(gato.peso)) {
			setError(false);
			setGatoVal(gato);
		} else {
			setError(true);
			setGatoVal(null);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className={FormStyles.formContainer}>
				<div>
					<label>Nombre: </label>
					<input type="text" onChange={(event) => setGato({ ...gato, nombre: event.target.value })} />
				</div>
				<div>
					<label>Alias: </label>
					<input type="text" onChange={(event) => setGato({ ...gato, alias: event.target.value })} />
				</div>
				<div>
					<label>Peso: </label>
					<input type="text" onChange={(event) => setGato({ ...gato, peso: event.target.value })} />
				</div>
				<button>Enviar</button>
				{error ? <h4 style={{ color: 'red' }}>Por favor chequea que la información sea correcta</h4> : null}
			</form>
			{gatoVal && <Card gato={gatoVal} />}
		</div>
	);
};

export default Form;
