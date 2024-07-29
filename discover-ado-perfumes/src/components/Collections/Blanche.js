import React, { useRef, useEffect, useState } from 'react';
import Cards from './Cards/Cards';
import './Collections.css'

const Blanche = () => {
	return (
		<section className="collection">
			<h2 className="collection-title">
					Collection Blanche
			</h2>
			<div className="card-group">
				<Cards
					name="Nuda Veritas"
					src="Blanche/Nuda-Veritas-768x768.jpg"
					alt="Nuda Veritas perfume video"
				/>
				<Cards
					name="Crepuscule des Ames"
					src="Blanche/Crepuscule-Des-ames-768x768.jpg"
					alt="Crepuscule des Ames perfume video"
				/>
				<Cards
					name="Choeur des Anges"
					src="Blanche/Choeur-Des-Anges-768x768.jpg"
					alt="Choeur des Anges perfume bottle"
				/>
			</div>
		</section>
	);
};

export default Blanche;