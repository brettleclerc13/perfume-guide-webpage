//previous code which showed play button as per viewport
/*
import { useEffect, useRef, useState } from 'react';	
import './Cards.css';

const Cards = (img_data) => {
	const { name, src, alt, onClick } = img_data;
	const [isVisible, setIsVisible] = useState(false);
	const cardRef = useRef(null);

	useEffect(() => {
		const currentCard = cardRef.current;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if(entry.isIntersecting) {
						setIsVisible(true);
						setTimeout(() => setIsVisible(false), 4000);
					}
				});
			},
			{
				threshold: 0.3,
			}
		);
		if (currentCard) {
			observer.observe(currentCard);
		}
		return () => {
			if (currentCard) {
				observer.unobserve(currentCard);
			}
		};
	}, []);

	return (
			<div
				className={`card ${isVisible ? 'show-play-icon' : ''}`}
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
			{isVisible && (
				<div className="play-icon">
					<img
						src="./Elements/Layout/Play-button.svg"
						alt="Play Icon"
						width="25"
						height="25"
					/>
				</div>
			)}
		</div>
	);
};

export default Cards;
*/

import './Cards.css';

const Cards = (img_data) => {
	const { name, src, alt, onClick } = img_data;

	return (
			<div
				className="card"
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
					src="./Elements/Layout/Play-button.svg"
					alt="Play Icon"
					width="25"
					height="25"
				/>
			</div>
		</div>
	);
};

export default Cards;
