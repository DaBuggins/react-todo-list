import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <h1>TODOS</h1>
      <TodoList />
    </>
  );
}

export default App;
