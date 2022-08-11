import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Note = (props) => {
	const { text, date, id } = props;
	console.log(id);
	return (
		<div className="note">
			<span>{text}</span>
			<div className="note-footer">
				<small>{date}</small>
				<FaTrashAlt className="delete-icon" size="1.6rem" />
			</div>
		</div>
	);
};

export default Note;
