import React from 'react';
import Cards from './Cards/Cards';
import './Collections.css'
// import { motion } from "framer-motion"

const MemoryLane = () => {
	return (
		<section className="collection">
			<h2 className="collection-title">
					Collection Memory Lane
			</h2>
			<div className="card-group">
				<Cards
					name="Blue Madeleine"
					src="MemoryLane/Blue-Madeleine-768x768.jpg"
					alt="blue madeleine perfume bottle"
				/>
				<Cards
					name="Villa Primerose"
					src="MemoryLane/Villa-Primerose-768x768.jpg"
					alt="blue madeleine perfume bottle"
				/>
			</div>
		</section>
	);
};

export default MemoryLane;