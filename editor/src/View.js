import { useEffect} from "react";
import './View.css';

function View(props){
    useEffect(() =>{
        const iframe = document.getElementById("result");
        iframe.contentDocument.open();
        iframe.contentDocument.write(props.content);
        iframe.contentDocument.close();
    })
    return(
       <div id="result-div">
            <div className="menubar dark"><div className="menu-item">
                Result
            </div></div>
            <iframe src = "about:blank" title = "live-view" id="result"></iframe>
       </div>
    )
}

export default View;