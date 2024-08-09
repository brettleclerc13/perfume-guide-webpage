import {useState} from 'react';
import Search from '../Search/Search';
import './NavBar.css';

const NavBar = () => {
	const	[showSearchBar, setSearchBar] = useState(false);

	const	handleClick = () => {
		setSearchBar(true);
	};

	const	closeSearchBar = () => {
		setSearchBar(false);
	};

	return (
		<nav>
			<img
				className="nav-group"
				src="./Elements/Layout/ADO_logo.svg"
				id="ADO-logo"
				alt="logo"
				draggable="false"
			/>
			<img
				className="nav-group"
				src="./Elements/Layout/Search.svg"
				id="search-icon"
				alt="search-button"
				draggable="false"
				onClick={handleClick}
			/>
			{showSearchBar && (
				<Search closeSearchBar={closeSearchBar} />
			)}
		</nav>
	);
};

export default NavBar;
