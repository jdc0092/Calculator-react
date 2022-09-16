import React from "react";

function ButtonClear (props) {
    return (
        <div className="Buttons-Clear" onClick={props.BtnClear}>
            {props.children}
            {/* <button onClick={props.Clear}>Crear</button> */}
        </div>
    )
}

export default ButtonClear;