import './App.css';
import '../components/NavBar/NavBar';
import NavBar from '../components/NavBar/NavBar';
import Intro from '../components/IntroVideo/IntroVideo';
import MemoryLane from '../components/Collections/MemoryLane';
import Frivolite from '../components/Collections/Frivolite';
import Noire from '../components/Collections/Noire';
import Blanche from '../components/Collections/Blanche';
import Eaux from '../components/Collections/Eaux';
import Riviera from '../components/Collections/Riviera';
// import CardPopup from '../components/Collections/CardPopup';

function App() {
	// const CardDetails = { name: 'Blue Madeleine', image: '/Elements/Layout/Perfume video front image 1.webp', alt: 'Blue Madeleine background image', subtitle: 'A Journey Through Memories.', notes: 'Tête : Bergamote, Poivre Rose, Cannelle\nCœur : Rose Centifolia pays infusion, Thé Noir, Nuage de lait\nFond : Cade, Baume du Pérou, Praline, Santal', intensity: 3 };
	// const closeCardPopUp = () => {
	// 	return true;
	// }
	return (
		<div className="App">
			{/* <CardPopup details={CardDetails} closePopup={closeCardPopUp} /> */}
			<NavBar />
			<h1 className="title">Perfume<br />guide</h1>
			<p className="subtitle">
				with founder Jean-Philippe<br />and master perfumer Marie Salamagne
			</p>
			<Intro />
			<p className="description">
				Select the videos matching the samples in your discovery set, and let us unveil the emotions and behind the scenes of each fragrance.
			</p>
			<MemoryLane />
			<Frivolite />
			<Noire />
			<Blanche />
			<Eaux />
			<Riviera />
		</div>
	);
}

export default App;
