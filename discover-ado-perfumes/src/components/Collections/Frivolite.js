import Cards from '../Cards/Cards';
import CardPopup from '../CardPopup/CardPopup';
import './Collections.css'
import { useState } from 'react';

const Frivolite = () => {
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
					Frivolité Collection
			</h2>
			<div className="card-group">
				<Cards
					name="Pink Me Up"
					src="Frivolite/pink-me-up-768x768.jpg"
					alt="Pink Me Up perfume bottle"
					onClick={() => handleCardClick({
						name: "Pink Me Up",
						slug: 'pink-me-up',
						videoUrl: "zWG4NLMSZHE"
					})}
				/>
				<Cards
					name="Noir By Night"
					src="Frivolite/noir-by-night-768x768.jpg"
					alt="Noir By Night perfume bottle"
					onClick={() => handleCardClick({
						name: "Noir By Night",
						slug: 'noir-by-night',
						videoUrl: "-gFO-clD1KQ"
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

export default Frivolite;
