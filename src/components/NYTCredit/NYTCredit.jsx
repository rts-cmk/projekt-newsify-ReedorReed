import React from 'react';
import NYTLogo from '../../assets/poweredby_nytimes_200a.png';
import './NYTCredit.sass';

export default function NYTCredit() {
	return (
		<div className="logo-container">
			<a href="https://developer.nytimes.com/">
				<img src={NYTLogo} alt="new york time logo" />
			</a>
		</div>
	);
}
