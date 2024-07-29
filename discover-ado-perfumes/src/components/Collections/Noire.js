import React, { useRef, useEffect, useState } from 'react';
import Cards from './Cards/Cards';
import './Collections.css'

const Noire = () => {
	return (
		<section className="collection">
			<h2 className="collection-title">
					Collection Noire
			</h2>
			<div className="card-group">
				<Cards
					name="Aube Rubis"
					src="Noire/aube-rubis-768x768.jpg"
					alt="Aube Rubis perfume bottle"
				/>
				<Cards
					name="Bois Sikar"
					src="Noire/bois-sikar-768x768.jpg"
					alt="Bois Sikar perfume bottle"
				/>
				<Cards
					name="Cuir Sacre"
					src="Noire/cuir-sacre-768x768.jpg"
					alt="Cuir Sacre perfume bottle"
				/>
				<Cards
					name="Iris Fauve"
					src="Noire/iris-fauve-768x768.jpg"
					alt="Iris Fauvre perfume bottle"
				/>
				<Cards
					name="Larmes du desert"
					src="Noire/larmes-du-desert-768x768.jpg"
					alt="Larmes du desert perfume bottle"
				/>
				<Cards
					name="Lune Féline"
					src="Noire/lune-feline-768x768.jpg"
					alt="Lune Féline perfume bottle"
				/>
				<Cards
					name="Musc Immortel"
					src="Noire/musc-immortel-768x768.jpg"
					alt="Musc Immortel perfume bottle"
				/>
				<Cards
					name="Rose Omeyyade"
					src="Noire/rose-omeyyade-768x768.jpg"
					alt="Rose Omeyyade perfume bottle"
				/>
				<Cards
					name="Rouge Saray"
					src="Noire/rouge-saray-768x768.jpg"
					alt="Rouge Saray perfume bottle"
				/>
			</div>
		</section>
	);
};

export default Noire;