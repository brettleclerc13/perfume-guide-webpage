import './App.css';
import '../components/NavBar/NavBar';
import NavBar from '../components/NavBar/NavBar';
import MemoryLane from '../components/Collections/MemoryLane';
import Frivolite from '../components/Collections/Frivolite';
import Noire from '../components/Collections/Noire';
import Blanche from '../components/Collections/Blanche';
import Eaux from '../components/Collections/Eaux';
import Riviera from '../components/Collections/Riviera';
import '../i18n';
import { useTranslation } from 'react-i18next';

function App() {
	const { t } = useTranslation();

	return (
		<div className="App">
			<NavBar />
			<h1 className="title">{t('title')}</h1>
			<p className="subtitle" id="subtitle-1">
				{t('subtitle_part_1')}
			</p>
			<p className="subtitle" id="subtitle-2">
				{t('subtitle_part_2')}
			</p>
			<img
				className="homepage-image"
				src="./Elements/Layout/ADO_homepage_image_4x3.jpg"
				alt="Jean-Philippe and Marie Salamagne testing perfumes"
			/>
			<p className="description">
				{t('description')}
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
