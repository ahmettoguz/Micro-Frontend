import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./components/Home";

function App() {
  return (
    <>
      <Home></Home>
      <br />
      <br />
      <br />
      <hr />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h4>Vite + React</h4>
      </div>
      <hr />
    </>
  );
}

export default App;
