import React from 'react';
import Cards from './Cards/Cards';
import CardPopup from './CardPopup';
import './Collections.css'
import { useState } from 'react';

const MemoryLane = () => {
	const	[showCardPopUp, setCardPopUp] = useState(false);
	const	[CardDetails, setCardDetails] = useState({ name: '', image: '', alt: '', subtitle: '', notes: '', intensity: 0 });

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
					Collection Memory Lane
			</h2>
			<div className="card-group">
				<Cards
					name="Blue Madeleine"
					src="MemoryLane/Blue-Madeleine-768x768.jpg"
					alt="blue madeleine perfume bottle"
					onClick={() => handleCardClick({
						name: "Blue Madeleine",
						image: "/Elements/Layout/Perfume video front image 1.webp",
						alt: "Blue Madeleine background image",
						subtitle: "A Journey Through Memories.",
						notes: "Tête : Bergamote, Poivre Rose, Cannelle\nCœur : Rose Centifolia pays infusion, Thé Noir, Nuage de lait\nFond : Cade, Baume du Pérou, Praline, Santal",
						intensity: 3
					})}
				/>
				<Cards
					name="Villa Primerose"
					src="MemoryLane/Villa-Primerose-768x768.jpg"
					alt="blue madeleine perfume bottle"
					onClick={() => handleCardClick({
						name: "Villa PrimeRose",
						image: "/Elements/Inspirations/Pomelo-riviera-2.jpg",
						alt: "Villa PrimeRose background image",
						subtitle: "A Fragrance of Elegance.",
						notes: "Tête : Bergamote, Poivre Rose, Cannelle\nCœur : Rose Centifolia pays infusion, Thé Noir, Nuage de lait\nFond : Cade, Baume du Pérou, Praline, Santal",
						intensity: 2
					})}
				/>
			</div>
			{showCardPopUp && (
				<CardPopup details={CardDetails} closePopup={closeCardPopUp} />
			)}
		</section>
	);
};

export default MemoryLane;
