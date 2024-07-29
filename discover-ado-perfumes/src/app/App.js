import './App.css';
import '../components/NavBar/NavBar';
import NavBar from '../components/NavBar/NavBar';
import Intro from '../components/IntroVideo/IntroVideo';
import MemoryLane from '../components/Collections/MemoryLane';
import Noire from '../components/Collections/Noire';

function App() {
  return (
    <div className="App">
		<NavBar />
		<Intro />
		<h1 class="title">Découvrez nos parfums</h1>
		<p class="subtitle">
			Des vidéos immersives révélant l'artisanat 
			et l'inspiration derrière chaque parfum unique.
		</p>
		<MemoryLane />
		<Noire />
	</div>
  );
}

export default App;
