import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import CardPopup from '../CardPopup/CardPopup';
import './Collections.css'

const Blanche = () => {
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
					White Collection
			</h2>
			<div className="card-group">
				<Cards
					name="Nuda Veritas"
					src="Blanche/Nuda-Veritas-768x768.jpg"
					alt="Nuda Veritas perfume bottle"
					onClick={() => handleCardClick({
						name: "Nuda Veritas",
						slug: 'nuda-veritas',
						videoUrl: "https://www.youtube.com/embed/bEo_2EJ045s?si=V8CS9WvFKSmLJehU"
					})}
				/>
				<Cards
					name="Crépuscule Des âmes"
					src="Blanche/Crepuscule-Des-ames-768x768.jpg"
					alt="Crépuscule Des âmes perfume bottle"
					onClick={() => handleCardClick({
						name: "Crépuscule Des âmes",
						slug: 'crepuscule-des-ames',
						videoUrl: "https://www.youtube.com/embed/t8uBABw7B6c?si=h5XT1CUs3mFL9ECt"
					})}
				/>
				<Cards
					name="Chœur Des Anges"
					src="Blanche/Choeur-Des-Anges-768x768.jpg"
					alt="Chœur Des Anges perfume bottle"
					onClick={() => handleCardClick({
						name: "Chœur Des Anges",
						slug: 'choeur-des-anges',
						videoUrl: "https://www.youtube.com/embed/Gx99sDp6-iw?si=2l6FjnP8OC38ceS2"
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

export default Blanche;