import React from 'react';
import './Cards.css';

const Cards = (img_data) => {
	const { name, src, alt } = img_data;
	return (
		<card className="card">
			<img
				name={name}
				className="card-img"
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
		</card>
	);
};

export default Cards;
