import './App.css';
import '../components/NavBar/NavBar';
import NavBar from '../components/NavBar/NavBar';
import Intro from '../components/IntroVideo/IntroVideo';
import MemoryLane from '../components/Collections/MemoryLane';
import Noire from '../components/Collections/Noire';
import Blanche from '../components/Collections/Blanche';
import Eaux from '../components/Collections/Eaux';
import Riviera from '../components/Collections/Riviera';

function App() {
  return (
    <div className="App">
		<NavBar />
		<h1 className="title">Découvrez<br />nos parfums</h1>
		<Intro />
		<p className="subtitle">
			Des vidéos immersives révélant l'artisanat 
			et l'inspiration derrière chaque parfum unique.
		</p>
		<MemoryLane />
		<Noire />
		<Blanche />
		<Eaux />
		<Riviera />
	</div>
  );
}

export default App;
