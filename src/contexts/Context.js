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

	// EVENT HANDLER DEFINITIONS
	const handleChange = (e) => {
		const newTextNote = e.target.value;
		setNoteText(newTextNote);
	};

	const handleSave = (text) => {
		if (text.trim().length > 0) {
			let noteObj = {
				text,
				date: "12/06/22",
				id: nanoid(),
			};
			setNotes((current) => {
				return [...current, noteObj];
			});

			setNoteText("");
		}
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
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Context;
