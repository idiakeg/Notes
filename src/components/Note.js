import React from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useContext } from "react";
import Context from "../contexts/Context";

const Note = (props) => {
	const { text, date, id } = props;
	const { handleDelete, handleEdit } = useContext(Context);
	return (
		<div className="note">
			<span>{text}</span>
			<div className="note-footer">
				<small>{date}</small>
				<div className="right">
					<FaPen className="edit-icon" onClick={() => handleEdit(id)} />
					<FaTrashAlt
						className="delete-icon"
						size="1.6rem"
						onClick={() => handleDelete(id)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Note;
