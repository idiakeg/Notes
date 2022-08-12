import { createContext, useState } from "react";
import { nanoid } from "nanoid";

const Context = createContext();

export const ContextProvider = ({ children }) => {
	// USE STATE DEFINITIONS
	const [notes, setNotes] = useState([
		{
			text: "This is my first note!!",
			date: "12/05/22",
			id: nanoid(),
		},
		{
			text: "This is my second note!!",
			date: "14/05/22",
			id: nanoid(),
		},
		{
			text: "This is my third note!!",
			date: "19/05/22",
			id: nanoid(),
		},
	]);

	const [noteText, setNoteText] = useState("");

	// CHARACTER COUNT DEFINITION
	const characterCount = 200;

	// EVENT HANDLER DEFINITIONS
	const handleChange = (e) => {
		const newTextNote = e.target.value;
		//if the length of the textNote is greater than the character count, donot change the state of the noteText
		if (characterCount - newTextNote.length >= 0) {
			setNoteText(newTextNote);
		}
	};

	const handleSave = (text) => {
		const date = new Date();
		if (text.trim().length > 0) {
			let noteObj = {
				text,
				date: date.toLocaleDateString(),
				id: nanoid(),
			};
			setNotes((current) => {
				return [...current, noteObj];
			});

			setNoteText("");
		}
	};

	const handleDelete = (id) => {
		const filteredNotes = notes.filter((item) => item.id !== id);
		setNotes(filteredNotes);
	};

	return (
		<Context.Provider
			value={{
				notes,
				setNotes,
				noteText,
				setNoteText,
				handleChange,
				handleSave,
				characterCount,
				handleDelete,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Context;
