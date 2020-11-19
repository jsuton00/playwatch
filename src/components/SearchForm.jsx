import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/components/searchForm.css';

export default function SearchForm(props) {
	const { searchValue, changeSearchValue, searchVideos } = props;

	const handleChangeValue = (e) => {
		return changeSearchValue(e.target.value);
	};

	const handleSearch = async (e) => {
		e.preventDefault();

		if (searchValue) {
			changeSearchValue(searchValue);
			await searchVideos(searchValue);
		}
	};
	return (
		<form id="search-form" name="search-form" className="search-form row">
			<div className="form-control-section input-section">
				<input
					id="search-box"
					name="search-box"
					type="text"
					placeholder="Search..."
					className="search-box form-control"
					onChange={handleChangeValue}
					value={searchValue}
				/>
			</div>
			<div className="form-control-section button-section">
				<button
					id="search-button"
					name="search-button"
					type="button"
					className="search-button button"
					onClick={handleSearch}
				>
					<span className="search-icon">
						<FontAwesomeIcon icon={faSearch} />
					</span>
				</button>
			</div>
		</form>
	);
}
