import React from 'react';
import './AnimatedDetails.sass';
import { IoChevronForwardOutline } from 'react-icons/io5';
import Logo from '../assets/newsify-logo.svg';

export default function AnimatedDetails({ title, children, ...props }) {
	//Handle fold in fold out height
	const handleToggle = (event) => {
		const element = event.target;

		const openHeight = element.scrollHeight + 'px';

		element.style.height = element.open ? openHeight : null;
	};

	return (
		<>
			<details onToggle={handleToggle} className="animated-details" {...props}>
				<summary className="animated-details__summary">
					<div className="animated-details__summary-header">
						<img
							src={Logo}
							alt="Newsify logo"
							className="animated-details__logo"
						/>
						{title}{' '}
					</div>
					<IoChevronForwardOutline className="animated-details__arrow" />
				</summary>
				<div className="animated-details__summary-content">{children}</div>
			</details>
		</>
	);
}
