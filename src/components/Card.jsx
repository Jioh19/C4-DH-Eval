import CardStyles from '../styles/Card.module.css';

const Card = ({ gato }) => {
	return (
		<div className={CardStyles.cardContainer}>
      <h3>Nombre</h3>
			<p>{gato.nombre}</p>
      <h3>Alias</h3>
			<p>{gato.alias}</p>
      <h3>Peso</h3>
			<p>{gato.peso}</p>
		</div>
	);
};

export default Card;
