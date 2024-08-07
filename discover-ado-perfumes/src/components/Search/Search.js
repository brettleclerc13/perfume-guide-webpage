import 'Search.css';

const Search = () => {
	const [perfumes, setPerfumes] = useState([]);
	return (
		<div className="search-container">
			<input className="search-bar" type="text" placeholder="Search" />
			<div className="search-results">
				
			</div>
		</div>
	);
};

export default Search;