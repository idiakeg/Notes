import React from "react";
import { useContext } from "react";
import Context from "../contexts/Context";

const AddNote = () => {
	const { noteText, handleChange, handleSave, characterCount } =
		useContext(Context);
	return (
		<div className="note new-note">
			<textarea
				cols="10"
				rows="8"
				placeholder="Type to add a note..."
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className="note-footer">
				<small>{characterCount - noteText.length} Remaining</small>
				<button className="save" onClick={() => handleSave(noteText)}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
