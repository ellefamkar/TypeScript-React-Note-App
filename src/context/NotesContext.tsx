import { createContext, ReactNode, useContext, useReducer } from "react";
import { Note } from "../types/Note";

// Note Type 
// in the foler types 

// Action Type
type Action = 
  { type: "add"; payload: Note} | { type: "delete"; payload: number} | { type : "complete"; payload: number}

// Notes Provider "Props" Type
type NotesProviderProps = {
  children: ReactNode;
}

// NotesContext and NotesDispatchContext Types 
type NotesContextType = Note[];
type NotesDispatchContextType = React.Dispatch<Action>

const NotesContext = createContext({} as NotesContextType);
const NotesDispatchContext = createContext({} as NotesDispatchContextType);

function notesReducer(notes : Note[], action : Action) {
  switch (action.type) {
    case "add": {
      return [...notes, action.payload];
    }
    case "delete": {
      return notes.filter((s) => s.id !== action.payload);
    }
    case "complete": {
      return notes.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error("unknown action" + action);
  }
}

export function NotesProvider({ children } : NotesProviderProps) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
