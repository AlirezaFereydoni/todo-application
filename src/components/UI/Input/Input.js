import React from "react";
import style from "./Input.module.scss";

const Input = props => {
    return <input type={props.type} className={`${style.Input} ${props.checked ? style.checked : null}`}/>
}

export default Input;