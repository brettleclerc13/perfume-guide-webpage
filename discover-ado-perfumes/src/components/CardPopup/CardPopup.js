import React from 'react'
import ReactDom from 'react-dom'
import './CardPopup.css'
//import YouTube from 'react-youtube';

const CardPopup = ( { details, closePopup }) => {
	// const onReady = (event) => {
	// 	event.target.playVideo();
	// };
			
	// const opts = {
	// 	height: 390,
	// 	width: 640,
	// 	playerVars: {
	// 		autoplay: 1,
	// 		controls: 1,
	// 		loop: 1
	// 	}
	// };

	return ReactDom.createPortal(
		<section className='popup'>
			<div className='popup-bg'>
					{/* <YouTube
						className='product-video'
						videoId={details.videoUrl}
						opts={opts}
						onReady={onReady}
					/> */}
					<iframe
						className='product-video'
						src={details.videoUrl}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen>
					</iframe>
			</div>
			<div className='back-button-container'>
				<img
					src='./Elements/Layout/arrow_back.svg'
					className='back-button'
					alt="back button"
					onClick={closePopup}
				/>
			</div>
			<div className='button-container'>
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
