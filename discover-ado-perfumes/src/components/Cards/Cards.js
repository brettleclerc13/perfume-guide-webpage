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
						setTimeout(() => setIsVisible(false), 1500);
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
					<svg
						width="34"
						height="34"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M8 5v14l11-7L8 5z" fill="white"/>
					</svg>
				</div>
			)}
		</div>
	);
};

export default Cards;
