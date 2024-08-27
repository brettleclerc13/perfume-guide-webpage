import { useRef } from 'react';	
import './Cards.css';

const Cards = (img_data) => {
	const { name, src, alt, onClick } = img_data;
	const cardRef = useRef(null);

	return (
		<div
			className="card"
			ref={cardRef}
			onClick={onClick}
		>
			<img
				name={name}
				className="card-img"
				onClick={onClick}
				src={`./Elements/Collections/${src}`}
				alt={alt}
				draggable="false"
			/>
			<div className="card-overlay"></div>
			<span className="card-text-container">
				<div className="empty-space"></div>
				<h3 className="card-text">
					{name.replace('_', ' ')}
				</h3>
			</span>
			<div className="play-icon">
				<img
					src="./Elements/Layout/play_button_v3.svg"
					alt="Play Icon"
					width="25"
					height="25"
				/>
			</div>
		</div>
	);
};

export default Cards;