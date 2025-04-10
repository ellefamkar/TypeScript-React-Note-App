import React from "react";
import { NotesProvider } from "../context/NotesContext";

// we have only "one provider" and we use an obj for it 
type Props = {
    children : React.ReactNode;
}

export default function AppProviders({ children } : Props){
    return <NotesProvider>{children}</NotesProvider>
} 