import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Note = () => {
	return (
		<div className="note">
			<span>Hello!! This is our first note! Hurray</span>
			<div className="note-footer">
				<small>13/04/2022</small>
				<FaTrashAlt className="delete-icon" size="1.2rem" />
			</div>
		</div>
	);
};

export default Note;
