import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import CardPopup from '../CardPopup/CardPopup';
import './Collections.css'

const Riviera = () => {
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
				Riviera Collection
			</h2>
			<div className="card-group">
				<Cards
					name="Riviera Sunrise"
					src="Riviera/Riviera-Sunrise-768x768.jpg"
					alt="Riviera Sunrise perfume bottle"
					onClick={() => handleCardClick({
						name: "Riviera Sunrise",
						slug: 'riviera-sunrise',
						videoUrl: "https://www.youtube.com/embed/8B65xRed7Zo?si=2mrfx-AADOI0RcfQ"
					})}
				/>
				<Cards
					name="Pomelo Riviera"
					src="Riviera/PomeloRiviera-768x768.jpg"
					alt="Rouge Sarây perfume bottle"
					onClick={() => handleCardClick({
						name: "Pomelo Riviera",
						slug: 'pomelo-riviera',
						videoUrl: "https://www.youtube.com/embed/8B65xRed7Zo?si=2mrfx-AADOI0RcfQ"
					})}
				/>
				<Cards
					name="Riviera Lazuli"
					src="Riviera/Riviera-Lazuli-768x768.jpg"
					alt="Riviera Lazuli perfume bottle"
					onClick={() => handleCardClick({
						name: "Riviera Lazuli",
						slug: 'riviera-lazuli',
						videoUrl: "https://www.youtube.com/embed/8B65xRed7Zo?si=2mrfx-AADOI0RcfQ"
					})}
				/>
				<Cards
					name="Riviera Drive"
					src="Riviera/Riviera-Drive-768x768.jpg"
					alt="Riviera Drive perfume bottle"
					onClick={() => handleCardClick({
						name: "Riviera Drive",
						slug: 'riviera-drive',
						videoUrl: "https://www.youtube.com/embed/8B65xRed7Zo?si=2mrfx-AADOI0RcfQ"
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

export default Riviera;