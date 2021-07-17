import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FileExp from './FileExp';
import Editor from './Editor';
import View from './View';
// import {addScript, addCSS} from "./helpers";

function App(){
  const [code, changeCode] = useState("");
  const [file, fileChange] = useState("xml");
  return(
    <div className="app">
      < FileExp click = {fileChange} />
      < Editor file = {file} click={changeCode}/>
      < View content = {code} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
