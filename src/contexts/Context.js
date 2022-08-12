import { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Context = createContext();

export const ContextProvider = ({ children }) => {
	// USE STATE DEFINITIONS
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem("react-note-app")) !== null
			? JSON.parse(localStorage.getItem("react-note-app"))
			: []
	);

	const [noteText, setNoteText] = useState("");
	const [searchText, setSearchtext] = useState("");
	const [darkMode, setDarkMode] = useState(false);

	// USE EFFECT DEFINITION
	useEffect(() => {
		// save the note to local storage
		localStorage.setItem("react-note-app", JSON.stringify(notes));
	}, [notes]);

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

	const handleSearchText = (value) => {
		let newSearchText = value;
		if (newSearchText !== " ") {
			setSearchtext(newSearchText);
		}
	};

	const handleDarkMode = () => {
		setDarkMode((current) => !current);
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
				searchText,
				setSearchtext,
				handleSearchText,
				darkMode,
				setDarkMode,
				handleDarkMode,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Context;
