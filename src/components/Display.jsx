import React from "react"
import "./Display.css"

function Display(props){
    return(
        <React.Fragment>
            <div className="display">{props.value || 0}</div> 
        </React.Fragment>
    )
}export default Display