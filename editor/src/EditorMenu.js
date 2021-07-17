import './Menu.css';

function MenuBar(props){
    return(
        <div className={props.c_theme === "Dark" ? "menubar dark": "menubar"}>
            <div className="title menu-item">
                Editor
            </div>
            <div className="menu-item font"><input type="number" name="font-size" defaultValue="16" onChange={(event) => {props.font(event.target.valueAsNumber)} }/></div>
            <div className="menu-item theme" defaultValue="Light" onChange={(event)=>{props.theme(event.target.value)}}>Theme<select>
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
            </select></div>
            <button className= {props.c_theme === "Dark" ? "menu-item dark dark-btn": "menu-item"}  id="run" type="button" onClick={(event) => {event.preventDefault(); props.click()}}>Run</button>
        </div>
    )
}

export default MenuBar;