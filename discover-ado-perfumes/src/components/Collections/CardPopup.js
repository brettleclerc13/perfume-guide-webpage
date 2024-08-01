import React from 'react'
import ReactDom from 'react-dom'
import './CardPopup.css'

const CardPopup = ( { details, closePopup }) => {
	return ReactDom.createPortal(
		<section className='popup'>
			<div className='popup-bg'>
				<iframe
					id="product-video"
					src={details.videoUrl}
					title="Atelier des ors intro video"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
			<div className='popup-content-container'>
				<div className='back-button-container'>
					<img
						src='./Elements/Layout/arrow_back.svg'
						className='back-button'
						alt="back button"
						onClick={closePopup}
					/>
				</div>
				<button
					className='shop-button'
					onClick={() => {window.open(`https://www.atelierdesors.com/product/${details.slug}`, '_blank').focus()}}
				>Shop</button>
			</div>
		</section>,
		document.getElementById('portal-popup')
	);
}

export default CardPopup;