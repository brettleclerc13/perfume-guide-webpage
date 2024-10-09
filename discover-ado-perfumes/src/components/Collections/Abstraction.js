import Cards from '../Cards/Cards';
import CardPopup from '../CardPopup/CardPopup';
import './Collections.css'
import { useState } from 'react';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const Abstraction = () => {
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
					{t('abstraction_title')}
			</h2>
			<div className="card-group">
				<Cards
					name="Kawa Karda"
					src="Abstraction/Kawa Karda Extrait Packshot.jpg"
					alt="kawa karda perfume bottle"
					onClick={() => handleCardClick({
						name: "Kawa Karda",
						slug: 'kawa-karda',
						videoUrl: "Xi5cVo-2T94"
					})}
				/>
				<Cards
					name="Cocoa Kimiya"
					src="Abstraction/Cocoa Kimiya Extrait Packshot.jpg"
					alt="cocoa kimiya perfume bottle"
					onClick={() => handleCardClick({
						name: "Cocoa Kimiya",
						slug: 'cocoa-kimiya',
						videoUrl: "XrxS08c574Y"
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

export default Abstraction;
