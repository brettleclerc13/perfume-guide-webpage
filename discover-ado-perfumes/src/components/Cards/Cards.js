import React from 'react';
import './Cards.css';

const Cards = (img_data) => {
	const { name, src, alt, onClick } = img_data;
	return (
			<div className="card" onClick={() => {
				console.log(`Card ${name} clicked`);
				onClick();
			}}>
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
		</div>
	);
};

export default Cards;
