import { useState } from 'react';
import Cards from '../Cards/Cards';
import CardPopup from '../CardPopup/CardPopup';
import './Collections.css'
import '../../i18n'
import { useTranslation } from 'react-i18next';

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

	const { t } = useTranslation();

	return (
		<section className="collection">
			<h2 className="collection-title">
				{t('riviera_title')}
			</h2>
			<div className="card-group">
				<Cards
					name="Riviera Sunrise"
					src="Riviera/Riviera-Sunrise-768x768.jpg"
					alt="Riviera Sunrise perfume bottle"
					onClick={() => handleCardClick({
						name: "Riviera Sunrise",
						slug: 'riviera-sunrise',
						videoUrl: "8B65xRed7Zo"
					})}
				/>
				<Cards
					name="Pomelo Riviera"
					src="Riviera/PomeloRiviera-768x768.jpg"
					alt="Rouge Sarây perfume bottle"
					onClick={() => handleCardClick({
						name: "Pomelo Riviera",
						slug: 'pomelo-riviera',
						videoUrl: "8B65xRed7Zo"
					})}
				/>
				<Cards
					name="Riviera Lazuli"
					src="Riviera/Riviera-Lazuli-768x768.jpg"
					alt="Riviera Lazuli perfume bottle"
					onClick={() => handleCardClick({
						name: "Riviera Lazuli",
						slug: 'riviera-lazuli',
						videoUrl: "8B65xRed7Zo"
					})}
				/>
				<Cards
					name="Riviera Drive"
					src="Riviera/Riviera-Drive-768x768.jpg"
					alt="Riviera Drive perfume bottle"
					onClick={() => handleCardClick({
						name: "Riviera Drive",
						slug: 'riviera-drive',
						videoUrl: "8B65xRed7Zo"
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