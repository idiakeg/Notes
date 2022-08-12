import React from "react";
import { useContext } from "react";
import Context from "../contexts/Context";

const Header = () => {
	const { handleDarkMode } = useContext(Context);
	return (
		<div className="header">
			<h1>Notes</h1>
			<button className="save" onClick={handleDarkMode}>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;
