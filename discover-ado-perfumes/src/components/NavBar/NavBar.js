import React from 'react';
import './NavBar.css';

const NavBar = () => {
	return (
		<nav>
			<img src="./Elements/Layout/ADO_logo.svg" class="nav-group" id="ADO-logo" alt="logo"/>
			<img src="./Elements/Layout/Search.svg" class="nav-group" id="Search-icon" alt="search-button"/>
		</nav>
	);
};

export default NavBar;
