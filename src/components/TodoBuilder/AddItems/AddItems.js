import React, {useState} from 'react'
import style from "./AddItems.module.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import * as actions from "../../../store/actions/actions";
import { connect } from "react-redux";

const AddItems =(props) => {

    const [value,setValue]=useState("");

    const addTodoHandler = () => {

        props.onAddItem(value) 
        setValue("")
        
    }

    return (
        <div className={style.AddItems}>
            <Input value={value} changed={event => setValue(event.target.value)} keyUp={(e)=> e.keyCode === 13 ? addTodoHandler() : null} />
            <Button clicked={addTodoHandler}>Add</Button>
            
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        onAddItem : (textVal)=> dispatch(actions.addItem(textVal))
    }
}


export default connect(null,mapDispatchToProps)(AddItems);