import React,{useState} from 'react'
import style from "./Item.module.scss";

const Item = (props) => {

    const [check,setCheck] = useState(false)
   
    return (
        <div className={style.Item} >
            <span className={style.Check} onClick={()=> setCheck(!check)}>
                <i className={`fas fa-check ${style.fas} ${check?style.block:null}`}></i>
            </span>
            <input type="text" className={`${style.Input} ${check? style.checked : null}`}  />
            
        </div>
    )
}


export default Item;