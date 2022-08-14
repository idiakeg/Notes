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
	const [editTodo, setEditTodo] = useState(null);

	// USE EFFECT DEFINITION
	useEffect(() => {
		localStorage.setItem("react-note-app", JSON.stringify(notes));
	}, [notes]);

	// CHARACTER COUNT DEFINITION
	const characterCount = 200;

	// EVENT HANDLER DEFINITIONS
	const handleChange = (e) => {
		const newTextNote = e.target.value;

		if (characterCount - newTextNote.length >= 0) {
			setNoteText(newTextNote);
		}
	};

	const handleSave = (text) => {
		const date = new Date();
		if (!editTodo) {
			if (text.trim().length > 0) {
				let noteObj = {
					text,
					date: date.toLocaleDateString(),
					id: nanoid(),
				};
				setNotes((current) => {
					return [...current, noteObj];
				});
			}

			setNoteText("");
		} else {
			updateNote(editTodo);
		}
	};

	const handleEdit = (id) => {
		const filteredNotes = notes.filter((item) => item.id !== id);
		setNotes(filteredNotes);
		const selectedNote = notes.find((item) => item.id === id);
		setEditTodo(selectedNote);
		// console.log(selectedNote);
		let newNoteText = selectedNote.text;
		setNoteText(newNoteText);
	};

	const updateNote = (update) => {
		const editedNote = { ...update, text: noteText };
		const date = new Date();
		if (editedNote.text.trim().length > 0) {
			let noteObj = {
				text: editedNote.text,
				date: date.toLocaleDateString(),
				id: editedNote.id,
			};
			setNotes((current) => {
				return [...current, noteObj];
			});

			setNoteText("");
		}

		setEditTodo(null);
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
				handleEdit,
				editTodo,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Context;
