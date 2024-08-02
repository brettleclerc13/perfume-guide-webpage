import React from 'react';
import Cards from './Cards/Cards';
import CardPopup from './CardPopup';
import './Collections.css'
import { useState } from 'react';

const MemoryLane = () => {
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
					Collection Memory Lane
			</h2>
			<div className="card-group">
				<Cards
					name="Blue Madeleine"
					src="MemoryLane/Blue-Madeleine-768x768.jpg"
					alt="blue madeleine perfume bottle"
					onClick={() => handleCardClick({
						name: "Blue Madeleine",
						slug: 'blue-madeleine',
						videoUrl: "https://www.youtube.com/embed/Or7GpsSICJs?si=NiIoEtDMMJc0ox4-"
					})}
				/>
				<Cards
					name="Villa Primerose"
					src="MemoryLane/Villa-Primerose-768x768.jpg"
					alt="blue madeleine perfume bottle"
					onClick={() => handleCardClick({
						name: "Villa Primerose",
						slug: 'villa-primerose',
						videoUrl: "https://www.youtube.com/embed/g1Mbj4Y5K1w?si=WGPMt6HZcqHhLNIf"
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
