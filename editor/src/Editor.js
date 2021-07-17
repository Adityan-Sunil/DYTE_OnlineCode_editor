import './Editor.css';
import {Controlled as CodeMirror} from 'react-codemirror2'
import { useEffect, useState } from 'react';
import Menubar from './EditorMenu';
import { addCSS, addScript } from './helpers';

//CodeMirror helper files
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');;
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/css/css.js');
require('codemirror/mode/xml/xml.js');

//Default strings to be shown in the editor
const def_html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Sample</title>
    </head>
    <body>
        
    </body>
</html>`;

const def_css = "body{\n}";

const def_js = `console.log("Hello World")`;

function submitCode(props, htmlcode, csscode, jscode){
    const parser = new DOMParser();
    const new_doc = parser.parseFromString(htmlcode, 'text/html');
    addCSS(new_doc.head, csscode);
    addScript(new_doc.body, jscode);
    const final_doc = "<html>" + new_doc.head.outerHTML + new_doc.body.outerHTML + "</html>";
    props.click(final_doc);
}
    
function Editor(props){

    const [htmlcode, changeHtml] = useState(def_html);
    const [jscode, changeJS] = useState(def_js);
    const [csscode, changeCSS] = useState(def_css);
    const [theme, changeTheme] = useState('dark');
    const [font, changeFont] = useState(16);
    const mode = props.file;

    var options = {
        lineNumbers: true,
        mode: mode,
        theme:(theme === 'Dark' ? 'material' : 'neat')
    };
    let code = null;
    let changeCode = null;
    if(mode === "xml"){
        code = htmlcode;
        changeCode = changeHtml;
    } else if (mode === "css"){
        code = csscode;
        changeCode = changeCSS;
    } else {
        code = jscode;
        changeCode = changeJS;
    }

    useEffect(() => {
        document.getElementsByClassName("editor")[0].style.fontSize = font.toString() + "px";
    })
    return(
        <div className="editor-div">
            <Menubar click={() => {submitCode(props, htmlcode, csscode, jscode)}} theme={changeTheme} c_theme = {theme} font={changeFont}/>
            <CodeMirror className="editor"
                value={code}
                options={options}
                onBeforeChange={(editor, data, value) => {
                    changeCode(value);
                }}
            />            
        </div>
    )
}

export default Editor;