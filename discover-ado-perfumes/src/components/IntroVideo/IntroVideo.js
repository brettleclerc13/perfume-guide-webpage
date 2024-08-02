import React from 'react';
import './IntroVideo.css';
import YouTube from 'react-youtube';

const IntroVideo = () => {
	const onReady = (event) => {
		event.target.playVideo();
	};
			
	const opts = {
		playerVars: {
			mute: 1,
			autoplay: 1,
			controls: 1,
			loop: 1
		}
	};

	return (
		<div className="intro-video-container">
			<iframe
				id="intro-video"
				src="https://www.youtube.com/embed/_rRk9vfYyDo?autoplay=1&mute=1&loop=1&controls=0&playlist=_rRk9vfYyDo"
				title="Atelier des ors intro video"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			{/* <iframe
				src="./Elements/Layout/sample_video_1x1.mp4"
				id="intro-video"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Atelier des ors intro video"
				>
			</iframe> */}
		</div>
	);
};

export default IntroVideo;