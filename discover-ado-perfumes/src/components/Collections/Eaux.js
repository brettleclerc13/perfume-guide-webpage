import Cards from './Cards/Cards';
import './Collections.css'

const Eaux = () => {
	return (
		<section className="collection">
			<h2 className="collection-title">
					Collection Blanche
			</h2>
			<div className="card-group">
				<Cards
					name="Blanc Polychrome"
					src="Eaux/Blanc-Polychrome-768x768.jpg"
					alt="Blanc Polychrome perfume video"
				/>
			</div>
		</section>
	);
};

export default Eaux;