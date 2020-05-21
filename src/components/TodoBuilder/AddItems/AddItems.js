import React from 'react'
import style from "./AddItems.module.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const AddItems =(props) => {
    return (
        <div className={style.AddItems}>
            <Input />
            <Button>Add</Button>
            
        </div>
    )
}


export default AddItems;