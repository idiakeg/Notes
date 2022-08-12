import { useContext } from "react";
import "./App.css";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import Context from "./contexts/Context";

function App() {
	const { darkMode } = useContext(Context);
	return (
		<div className={darkMode ? "dark-mode" : null}>
			<div className="container">
				<Header />
				<Search />
				<NotesList />
			</div>
		</div>
	);
}

export default App;
