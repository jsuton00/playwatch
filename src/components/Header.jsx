import React from 'react';
import SearchForm from './SearchForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/header.css';

export default function Header(props) {
	const { searchValue, changeSearchValue, searchVideos } = props;
	return (
		<header id="header" className="header container-fluid">
			<nav className="nav nav-header row">
				<div className="nav-item brand-item">
					<h1 className="brand-name">
						<span className="brand-logo">
							<FontAwesomeIcon icon={faYoutube} />
						</span>
						PlayWatch
					</h1>
				</div>
				<div className="nav-item form-item">
					<SearchForm
						searchValue={searchValue}
						changeSearchValue={changeSearchValue}
						searchVideos={searchVideos}
					/>
				</div>
			</nav>
		</header>
	);
}
