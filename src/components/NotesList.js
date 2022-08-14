import React from "react";
import Note from "./Note";
import { useContext } from "react";
import Context from "../contexts/Context";
import AddNote from "./AddNote";

const NotesList = () => {
	let { notes, searchText } = useContext(Context);
	const searchValue = searchText.toLowerCase();
	return (
		<div className="note-list">
			<AddNote />
			{notes
				.filter((item) => item.text.toLowerCase().includes(searchValue))
				.map((note) => (
					<Note text={note.text} id={note.id} date={note.date} key={note.id} />
				))}
		</div>
	);
};

export default NotesList;
