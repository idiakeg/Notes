import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import Context from "../contexts/Context";

const Note = (props) => {
	const { text, date, id } = props;
	const { handleDelete } = useContext(Context);
	return (
		<div className="note">
			<span>{text}</span>
			<div className="note-footer">
				<small>{date}</small>
				<FaTrashAlt
					className="delete-icon"
					size="1.6rem"
					onClick={() => handleDelete(id)}
				/>
			</div>
		</div>
	);
};

export default Note;
