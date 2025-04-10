import { useState } from "react";
import "./App.css";
import NoteHeader from "./components/NoteHeader";
import NoteApp from "./components/NoteApp";
import AppProviders from "./Providers/AppProviders";
import { SortByType } from "./types/SortBy";

function App() {
  const [sortBy, setSortBy] = useState<SortByType>("latest");
  return (
    <AppProviders>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(value) => setSortBy(value)} />
        <NoteApp sortBy={sortBy} />
      </div>
    </AppProviders>
  );
}

export default App;

// =>install TypeScript in existing React project 
// - npm i @types/react @types/react-dom typescript

// => change suffixes from js to ts
// - vite.config.ts ==> (js => ts)

// => Add these files
// - tsconfig.json
// - tsconfig.node.json

// ==> src ==> vite-env.d.ts

// ==> index.html ==>  <script type="module" src="/src/main.tsx"></script>

// - .eslintrc.cjs

// ==> package.json =>  
// -"@typescript-eslint/eslint-plugin": "^6.21.0",
// - "@typescript-eslint/parser": "^6.21.0",

// ==> AppProvider.tsx => 
// type Props = {
//     children : React.ReactNode;
// }

// ==> main.tsx => document.getElementById('root')!
// Add exclmation mark to say that it definitely exists and is not null 

