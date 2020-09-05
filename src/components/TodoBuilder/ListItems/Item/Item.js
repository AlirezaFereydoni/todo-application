import React,{useState} from 'react'
import style from "./Item.module.scss";
import Input from "../../../UI/Input/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import { completeItem } from '../../../../store/actions/actions';
import * as actions from "./../../../../store/actions/actions";

const Item = (props) => {

    const [check,setCheck] = useState(false)
    
    const taskHandler = () => {
        setCheck(!check);
        props.onCompleteTask(check);

    }

    
    return (
        <div className={style.Item} >

            <span className={style.Check} onClick={taskHandler}>
                <FontAwesomeIcon icon={faCheck} className={` ${style.fas} ${check?style.block:null}`}/>
            </span>

            <Input type="text" value={props.value} checked={check} />

            <FontAwesomeIcon icon={faTrash} className={`${style.Remove}`} onClick={props.removed}/>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return  {
        onCompleteTask: (id) => dispatch(actions.completeItem(id))
    }
}
export default connect(null,mapDispatchToProps)(Item);