import { NotesProvider } from "../context/NotesContext";

type Props = {
    children : React.ReactNode;
}

export default function AppProviders({ children } : Props){
    return <NotesProvider>{children}</NotesProvider>
} 