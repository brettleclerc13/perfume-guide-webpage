import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import CardPopup from '../CardPopup/CardPopup';
import './Collections.css'

const Eaux = () => {
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
				Eaux Collection
			</h2>
			<div className="card-group">
				<Cards
					name="Blanc Polychrome"
					src="Eaux/Blanc-Polychrome-768x768.jpg"
					alt="Blanc Polychrome perfume video"
					onClick={() => handleCardClick({
						name: "Blanc Polychrome",
						slug: 'blanc-polychrome',
						videoUrl: "https://www.youtube.com/embed/biY4aNXYDvs?si=De_3W7gmlyF2kpt3"
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

export default Eaux;