import { createContext, useState } from "react";
import { nanoid } from "nanoid";

const Context = createContext();

export const ContextProvider = ({ children }) => {
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
	return (
		<Context.Provider value={{ notes, setNotes }}>{children}</Context.Provider>
	);
};

export default Context;
