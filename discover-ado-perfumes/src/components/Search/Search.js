import { useState, useMemo } from 'react';
import CardPopup from '../CardPopup/CardPopup';
import ReactDom from 'react-dom';
import './Search.css';

const Search = (closeSearchBar) => {
	const perfumes = useMemo(() => [
					{name: 'Blue Madeleine', image: 'MemoryLane/Blue-Madeleine-768x768.jpg', slug: 'blue-madeleine', videoUrl: 'Or7GpsSICJs'},
					{name: 'Villa Primerose', image: 'MemoryLane/Villa-Primerose-768x768.jpg', slug: 'villa-primerose', videoUrl: 'g1Mbj4Y5K1w'},
					{name: 'Pink Me Up', image: 'Frivolite/pink-me-up-768x768.jpg', slug: 'pink-me-up', videoUrl: 'zWG4NLMSZHE'},
					{name: 'Noir By Night', image: 'Frivolite/noir-by-night-768x768.jpg', slug: 'noir-by-night', videoUrl: '-gFO-clD1KQ'},
					{name: 'Lune Féline', image: 'Noire/lune-feline-768x768.jpg', slug: 'lune-feline', videoUrl: '_rRk9vfYyDo'},
					{name: 'Rouge Sarây', image: 'Noire/rouge-saray-768x768.jpg', slug: 'rouge-saray', videoUrl: 'FfJATJUyC-Q'},
					{name: 'Rose Omeyyade', image: 'Noire/rose-omeyyade-768x768.jpg', slug: 'rose-omeyyade', videoUrl: '0W8kofUVsXg'},
					{name: 'Bois Sikar', image: 'Noire/bois-sikar-768x768.jpg', slug: 'bois-sikar', videoUrl: 'ufHvfLNDJSU'},
					{name: 'Cuir Sacré', image: 'Noire/cuir-sacre-768x768.jpg', slug: 'cuir-sacre', videoUrl: 'rpccKM1dptU'},
					{name: 'Iris Fauve', image: 'Noire/iris-fauve-768x768.jpg', slug: 'iris-fauve', videoUrl: 'XuWXybyntrA'},
					{name: 'Larmes Du Désert', image: 'Noire/larmes-du-desert-768x768.jpg', slug: 'larmes-du-desert', videoUrl: '6vHUrEAxt-U'},
					{name: 'Musc Immortel', image: 'Noire/musc-immortel-768x768.jpg', slug: 'musc-immortel', videoUrl: 'Trw2ZWT0tvI'},
					{name: 'Aube Rubis', image: 'Noire/aube-rubis-768x768.jpg', slug: 'aube-rubis', videoUrl: 'x88B8k6v9jU'},
					{name: 'Nuda Veritas', image: 'Blanche/Nuda-Veritas-768x768.jpg', slug: 'nuda-veritas', videoUrl: 'bEo_2EJ045s'},
					{name: 'Crépuscule Des âmes', image: 'Blanche/Crepuscule-Des-ames-768x768.jpg', slug: 'crepuscule-des-ames', videoUrl: 't8uBABw7B6c'},
					{name: 'Chœur Des Anges', image: 'Blanche/Choeur-Des-Anges-768x768.jpg', slug: 'choeur-des-anges', videoUrl: 'Gx99sDp6-iw'},
					{name: 'Blanc Polychrome', image: 'Eaux/Blanc-Polychrome-768x768.jpg', slug: 'blanc-polychrome', videoUrl: 'biY4aNXYDvs'},
					{name: 'Riviera Sunrise', image: 'Riviera/Riviera-Sunrise-768x768.jpg', slug: 'riviera-sunrise', videoUrl: '8B65xRed7Zo	'},
					{name: 'Pomelo Riviera', image: 'Riviera/PomeloRiviera-768x768.jpg', slug: 'pomelo-riviera', videoUrl: '8B65xRed7Zo'},
					{name: 'Riviera Lazuli', image: 'Riviera/Riviera-Lazuli-768x768.jpg', slug: 'riviera-lazuli', videoUrl: '8B65xRed7Zo'},
					{name: 'Riviera Drive', image: 'Riviera/Riviera-Drive-768x768.jpg', slug: 'riviera-drive', videoUrl: '8B65xRed7Zo'}
				], []);
	
	const [query, setQuery] = useState("");

	const filteredPerfumes = useMemo(() => {
		return perfumes.filter(perfume => {
			return (query === "" ? "" : perfume.name.toLowerCase().includes(query.toLowerCase()))
		})
	}, [perfumes, query])

	const	[showCardPopUp, setCardPopUp] = useState(false);
	const	[CardDetails, setCardDetails] = useState({ name: '', slug: '', videoUrl: '' });

	const	handleCardClick = (content) => {
		setCardDetails(content);
		setCardPopUp(true);
	};

	const	closeCardPopUp = () => {
		setCardPopUp(false);
	};

	return ReactDom.createPortal(
		<section className="search-container">
			<div className='back-button-container'>
                <img
                    src='./Elements/Layout/arrow_back.svg'
                    className='back-button'
                    alt="back button"
                    onClick={closeSearchBar}
                />
            </div>
			<input
				value={query}
				onChange={e => setQuery(e.target.value)}
				className="search-bar"
				type="text"
				placeholder="Search"
			/>
			<div className="search-results">
				{filteredPerfumes.map(perfume => (
					<div
						className="perfume-search-card"
						onClick={() => handleCardClick({
							name: `${perfume.name}`,
							slug: `${perfume.slug}`,
							videoUrl: `${perfume.videoUrl}`
						})}
						>
						<img
							className="perfume-image"
							src={`./Elements/Collections/${perfume.image}`}
							alt={perfume.name}
							draggable="false"
						/>
						<div className="perfume-name">{perfume.name}</div>
					</div>
				))}
			</div>
			{showCardPopUp && (
				<CardPopup details={CardDetails} closePopup={closeCardPopUp} />
			)}
		</section>,
		document.getElementById('portal-search')
	);
};

export default Search;