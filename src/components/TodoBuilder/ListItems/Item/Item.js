import React,{useState} from 'react'
import style from "./Item.module.scss";
import Input from "../../../UI/Input/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTrash } from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {

    const [check,setCheck] = useState(false)
    

    
    return (
        <div className={style.Item} >

            <span className={style.Check} onClick={()=> setCheck(!check)}>
                <FontAwesomeIcon icon={faCheck} className={` ${style.fas} ${check?style.block:null}`}/>
            </span>

            

            <Input type="text" checked={check} />

            <FontAwesomeIcon icon={faTrash} className={`${style.Remove}`} onClick={props.removed}/>
            
        </div>
    )
}


export default Item;