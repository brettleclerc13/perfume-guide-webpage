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
						videoUrl: "bEo_2EJ045s"
					})}
				/>
				<Cards
					name="Crépuscule Des âmes"
					src="Blanche/Crepuscule-Des-ames-768x768.jpg"
					alt="Crépuscule Des âmes perfume bottle"
					onClick={() => handleCardClick({
						name: "Crépuscule Des âmes",
						slug: 'crepuscule-des-ames',
						videoUrl: "t8uBABw7B6c"
					})}
				/>
				<Cards
					name="Chœur Des Anges"
					src="Blanche/Choeur-Des-Anges-768x768.jpg"
					alt="Chœur Des Anges perfume bottle"
					onClick={() => handleCardClick({
						name: "Chœur Des Anges",
						slug: 'choeur-des-anges',
						videoUrl: "Gx99sDp6-iw"
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