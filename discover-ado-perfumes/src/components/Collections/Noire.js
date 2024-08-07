import Cards from '../Cards/Cards';
import CardPopup from '../CardPopup/CardPopup';
import './Collections.css'
import { useState } from 'react';

const Noire = () => {
	const	[showCardPopUp, setCardPopUp] = useState(false);
	const	[CardDetails, setCardDetails] = useState({ name: '', slug: '', videoUrl: '' });

	const	handleCardClick = (content) => {
		setCardDetails(content);
		setCardPopUp(true);
	};

	const	closeCardPopUp = () => {
		setCardPopUp(false);
	};

	return (
		<section className="collection">
			<h2 className="collection-title">
					Black Collection
			</h2>
			<div className="card-group">
				<Cards
					name="Lune Féline"
					src="Noire/lune-feline-768x768.jpg"
					alt="Lune Feline perfume bottle"
					onClick={() => handleCardClick({
						name: "Lune Féline",
						slug: 'lune-feline',
						videoUrl: "_rRk9vfYyDo"
					})}
				/>
				<Cards
					name="Rouge Sarây"
					src="Noire/rouge-saray-768x768.jpg"
					alt="Rouge Sarây perfume bottle"
					onClick={() => handleCardClick({
						name: "Rouge Sarây",
						slug: 'rouge-saray',
						videoUrl: "FfJATJUyC-Q"
					})}
				/>
				<Cards
					name="Rose Omeyyade"
					src="Noire/rose-omeyyade-768x768.jpg"
					alt="Rose Omeyyade perfume bottle"
					onClick={() => handleCardClick({
						name: "Rose Omeyyade",
						slug: 'rose-omeyyade',
						videoUrl: "0W8kofUVsXg"
					})}
				/>
				<Cards
					name="Bois Sikar"
					src="Noire/bois-sikar-768x768.jpg"
					alt="Bois Sikar perfume bottle"
					onClick={() => handleCardClick({
						name: "Bois Sikar",
						slug: 'bois-sikar',
						videoUrl: "ufHvfLNDJSU"
					})}
				/>
				<Cards
					name="Cuir Sacré"
					src="Noire/cuir-sacre-768x768.jpg"
					alt="Cuir Sacré perfume bottle"
					onClick={() => handleCardClick({
						name: "Cuir Sacré",
						slug: 'cuir-sacre',
						videoUrl: "rpccKM1dptU"
					})}
				/>
				<Cards
					name="Iris Fauve"
					src="Noire/iris-fauve-768x768.jpg"
					alt="Iris Fauve perfume bottle"
					onClick={() => handleCardClick({
						name: "Iris Fauve",
						slug: 'iris-fauve',
						videoUrl: "XuWXybyntrA"
					})}
				/>
				<Cards
					name="Larmes Du Désert"
					src="Noire/larmes-du-desert-768x768.jpg"
					alt="Larmes Du Désert perfume bottle"
					onClick={() => handleCardClick({
						name: "Larmes Du Désert",
						slug: 'larmes-du-desert',
						videoUrl: "6vHUrEAxt-U"
					})}
				/>
				<Cards
					name="Musc Immortel"
					src="Noire/musc-immortel-768x768.jpg"
					alt="Musc Immortel perfume bottle"
					onClick={() => handleCardClick({
						name: "Musc Immortel",
						slug: 'musc-immortel',
						videoUrl: "Trw2ZWT0tvI"
					})}
				/>
				<Cards
					name="Aube Rubis"
					src="Noire/aube-rubis-768x768.jpg"
					alt="Aube Rubis perfume bottle"
					onClick={() => handleCardClick({
						name: "Aube Rubis",
						slug: 'aube-rubis',
						videoUrl: "x88B8k6v9jU"
					})}
				/>
				<div className="card-right-padding"></div>
			</div>
			{showCardPopUp && (
				<CardPopup details={CardDetails} closePopup={closeCardPopUp} />
			)}
		</section>
	);
};

export default Noire;