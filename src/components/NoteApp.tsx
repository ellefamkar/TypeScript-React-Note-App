
import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";
import NoteStatus from "./NoteStatus";
import { SortByType } from "../types/SortBy";

type NoteAppProps = {
  sortBy : SortByType
}

function NoteApp({sortBy} : NoteAppProps) {
  return (
    <div className="note-app">
      <AddNewNote />
      <div className="note-container">
        <NoteStatus />
        <NoteList sortBy={sortBy} />
      </div>
    </div>
  );
}

export default NoteApp;
