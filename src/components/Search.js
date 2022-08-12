import React from "react";
import { FaSistrix } from "react-icons/fa";
import { useContext } from "react";
import Context from "../contexts/Context";

const Search = () => {
	const { searchText, handleSearchText } = useContext(Context);
	return (
		<div className="search">
			<FaSistrix size="1.8rem" />
			<input
				type="text"
				value={searchText}
				onChange={(e) => handleSearchText(e.target.value)}
				placeholder="type to search..."
			/>
		</div>
	);
};

export default Search;
