import "./App.css";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

function App() {
	return (
		<div className="container">
			<Search />
			<NotesList />
		</div>
	);
}

export default App;
