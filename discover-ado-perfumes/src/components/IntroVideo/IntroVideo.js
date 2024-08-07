import './IntroVideo.css';

const IntroVideo = () => {
	return (
		<div className="intro-video-container">
			<iframe
				id="intro-video"
				src="https://www.youtube.com/embed/_rRk9vfYyDo?autoplay=1&mute=1&loop=1&controls=0&playlist=_rRk9vfYyDo"
				title="Atelier des ors intro video"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				></iframe>
		</div>
	);
};

export default IntroVideo;
