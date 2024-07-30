import Cards from './Cards/Cards';
import './Collections.css'

const Riviera = () => {
	return (
		<section className="collection">
			<h2 className="collection-title">
					Collection Riviera
			</h2>
			<div className="card-group">
				<Cards
					name="Pomelo Riviera"
					src="Riviera/PomeloRiviera-768x768.jpg"
					alt="Pomelo Riviera perfume bottle"
				/>
				<Cards
					name="Riviera Drive"
					src="Riviera/Riviera-Drive-768x768.jpg"
					alt="Riviera Drive perfume bottle"
				/>
				<Cards
					name="Riviera Lazuli"
					src="Riviera/Riviera-Lazuli-768x768.jpg"
					alt="Cuir Sacre perfume bottle"
				/>
				<Cards
					name="Riviera Sunrise"
					src="Riviera/Riviera-Sunrise-768x768.jpg"
					alt="Riviera Sunrise perfume bottle"
				/>
			</div>
		</section>
	);
};

export default Riviera;