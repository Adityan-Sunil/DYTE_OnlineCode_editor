import './FileExp.css'
function File(props){
    return(
        <button type="button" className="file" onClick={(event) => {event.preventDefault();props.click(props.ext)}}>
            {props.filename}
        </button>
    )
}
function FileExp(props){
    return(
        <div className="fileexp-div">
            <div className="menubar">
                <div className="menu-item">
                    Files
                </div>
            </div>
            <div className="fileexp">
                <File className="file" filename="index.html" click={props.click} ext="xml"/>
                <File className="file" filename="index.css" click={props.click} ext="css"/>
                <File className="file" filename="index.js" click={props.click} ext="javascript"/>
            </div>
        </div>
    )
}

export default FileExp;