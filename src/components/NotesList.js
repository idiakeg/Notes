import React from "react";
import Note from "./Note";
import { useContext } from "react";
import Context from "../contexts/Context";
import AddNote from "./AddNote";

const NotesList = () => {
	let { notes } = useContext(Context);
	return (
		<div className="note-list">
			{notes.map((note) => (
				<Note text={note.text} id={note.id} date={note.date} key={note.id} />
			))}
			<AddNote />
		</div>
	);
};

export default NotesList;
