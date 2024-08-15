import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import React, { useState } from "react";

import { ThemeProvider } from './utils/ThemeProvider';

import MenuBar from './components/MenuBar';

import Home from "./components/Home";
import MyAppBar from "./components/MyAppBar";

import { APP_NAME, APP_DESCRIPTION } from "./utils/envVars";

function App() {
  return (
    <ThemeProvider>
      <MenuBar />
      {/* Add other components here */}
    </ThemeProvider>
  );

  // return (
  //   <>
  //     <br />
  //     <br />
  //     <strong>App name: </strong> <span>{APP_NAME}</span>
  //     <br />
  //     <strong>App description: </strong> <span>{APP_DESCRIPTION}</span>
  //     <br />
  //     <hr />
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //       <h4>Vite + React</h4>
  //     </div>
  //     <hr />
  //   </>
  // );
}

export default App;
