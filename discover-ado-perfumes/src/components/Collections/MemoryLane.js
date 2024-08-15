import Cards from '../Cards/Cards';
import CardPopup from '../CardPopup/CardPopup';
import './Collections.css'
import { useState } from 'react';
import '../../i18n';
import { useTranslation } from 'react-i18next';

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

	const { t } = useTranslation();

	return (
		<section className="collection">
			<h2 className="collection-title">
					{t('memory_lane_title')}
			</h2>
			<div className="card-group">
				<Cards
					name="Blue Madeleine"
					src="MemoryLane/Blue-Madeleine-768x768.jpg"
					alt="blue madeleine perfume bottle"
					onClick={() => handleCardClick({
						name: "Blue Madeleine",
						slug: 'blue-madeleine',
						videoUrl: "Or7GpsSICJs"
					})}
				/>
				<Cards
					name="Villa Primerose"
					src="MemoryLane/Villa-Primerose-768x768.jpg"
					alt="blue madeleine perfume bottle"
					onClick={() => handleCardClick({
						name: "Villa Primerose",
						slug: 'villa-primerose',
						videoUrl: "g1Mbj4Y5K1w"
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

export default MemoryLane;
