import CardStyles from '../styles/Card.module.css';

const Card = ({ gato }) => {
	return (
		<div className="CardStyles.cardContainer">
			<p>{gato.nombre}</p>
			<p>{gato.alias}</p>
			<p>{gato.peso}</p>
		</div>
	);
};

export default Card;
