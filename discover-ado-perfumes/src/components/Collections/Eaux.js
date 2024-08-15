import { useState } from 'react';
import Cards from '../Cards/Cards';
import CardPopup from '../CardPopup/CardPopup';
import './Collections.css'
import '../../i18n';
import { useTranslation } from 'react-i18next';

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

	const { t } = useTranslation();

	return (
		<section className="collection">
			<h2 className="collection-title">
				{t('eaux_title')}
			</h2>
			<div className="card-group">
				<Cards
					name="Blanc Polychrome"
					src="Eaux/Blanc-Polychrome-768x768.jpg"
					alt="Blanc Polychrome perfume video"
					onClick={() => handleCardClick({
						name: "Blanc Polychrome",
						slug: 'blanc-polychrome',
						videoUrl: "biY4aNXYDvs"
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