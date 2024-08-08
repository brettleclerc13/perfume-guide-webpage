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
				src="./Elements/Layout/ADO_logo.svg"
				className="nav-group"
				id="ADO-logo"
				alt="logo"
				draggable="false"
			/>
			<img
				src="./Elements/Layout/Search.svg"
				className="nav-group"
				id="Search-icon"
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
