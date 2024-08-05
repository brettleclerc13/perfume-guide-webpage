import React, {useEffect} from 'react'
import ReactDom from 'react-dom'
import './CardPopup.css'

const CardPopup = ( { details, closePopup }) => {
	useEffect(() => {
		// This function will be called when the IFrame API is ready
		const onYouTubeIframeAPIReady = () => {
			new window.YT.Player('youtube-player', {
			videoId: details.videoUrl,
			events: {
			  'onReady': onPlayerReady
			}
		  });
	
		  function onPlayerReady(event) {
			event.target.setPlaybackQuality('large'); // Set quality to 480p
			event.target.playVideo();
			// Hide the overlay once the video starts playing
			const overlay = document.getElementById('video-overlay');
			if (overlay) {
				overlay.classList.add('hidden');
			}
			const shopButtonContainer = document.getElementById('shop-button-container');
			if (shopButtonContainer) {
				shopButtonContainer.classList.add('show');
			}
			document.getElementById('video-overlay');
		  }
		};
	
		// Wait for the YouTube IFrame API to be ready before creating the player
		if (window.YT && window.YT.Player) {
		  onYouTubeIframeAPIReady();
		} else {
		  window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
		}
	}, [details]);

	useEffect(() => {
		const overlay = document.getElementById('video-overlay');
		const handleTransitionEnd = () => {
		  overlay.style.display = 'none'; // Hide the overlay after the transition
		};
	
		// Ensure the overlay is shown initially
		if (overlay) {
		  overlay.style.display = 'block';
		  overlay.addEventListener('transitionend', handleTransitionEnd);
		}
	
		return () => {
		  if (overlay) {
			overlay.removeEventListener('transitionend', handleTransitionEnd);
		  }
		};
	  }, []);

	return ReactDom.createPortal(
		<section className='popup'>
			<div className='popup-bg'>
				<div id='youtube-player' className='product-video'></div>
				<div id='video-overlay' className='video-overlay'></div>
			</div>
			<div className='back-button-container'>
				<img
					src='./Elements/Layout/arrow_back.svg'
					className='back-button'
					alt="back button"
					onClick={closePopup}
				/>
			</div>
			<div id='shop-button-container' className='button-container'>
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
