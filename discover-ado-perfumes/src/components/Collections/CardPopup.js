import React from 'react'
import './CardPopup.css'

const CardPopup = ( { details, closePopup }) => {
	return (
		<section className="popup">
			<div className="popup-bg" onClick={closePopup}></div>
			<img className="image-bg" src={details.image} alt={details.alt} />
			<div className="overlay"></div>
			<div className="content" onClick={(e) => e.stopPropagation()}>
				<h4 className="title">{details.name}</h4>
				<h5 className="subtitle">{details.subtitle}</h5>
				<p className="notes">{details.notes}</p>
				<span className="intensity">{details.intensity}</span>
			</div>
		</section>
	);
}

export default CardPopup;