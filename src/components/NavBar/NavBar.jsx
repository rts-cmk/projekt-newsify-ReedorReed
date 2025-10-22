import React from 'react';
import { NavLink } from 'react-router';
import HomeIcon from '../assets/home-icon-light.svg';
import ArchiveIcon from '../assets/archive-icon-light.svg';
import PopularIcon from '../assets/popular-icon-light.svg';
import SettingsIcon from '../assets/settings-icon-light.svg';
import './NavBar.sass';

export default function NavBar() {
	return (
		<nav>
			<NavLink to="/home" end>
				<img src={HomeIcon} /> Home
			</NavLink>
			<NavLink to="/archive" end>
				<img src={ArchiveIcon} />
				Archive
			</NavLink>
			<NavLink to="/popular" end>
				<img src={PopularIcon} />
				Popular
			</NavLink>
			<NavLink to="/settings" end>
				<img src={SettingsIcon} />
				Settings
			</NavLink>
		</nav>
	);
}
