import React,{useState} from "react";
import uuid from "react-uuid";
import Input from "./../components/input/Input";
import Button from "./../components/Button/Button";
import Task from "./../components/Task/Task";
import * as actions from "./../store/actions";
import {useSelector,useDispatch} from "react-redux";
import Modal from "./../components/Modal/Modal";
import Pagination from "../components/Pagination/Pagination";
import * as Style from "./TodoBuilderStyle";


const TodoBuilder = props => {
    const store = useSelector(state => state);
    const [task,setTask] = useState("");
    const [pagination,setPagination] = useState({currentPage:1,first:0,last:4});
    const [modal,setModal] = useState({open:false,currentId:null,edit:""});
    const dispatch = useDispatch();
    const perPage = 4;
    

    const submitTask = (e) => {
        e.preventDefault();
        dispatch(actions.addItem(uuid(),task));
        setTask("");
    }

    const editSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.editItem(modal.currentId,modal.edit));
        setModal({edit:"",open:false});
    }

    const Todo = (situation) => {
        return (
            store.slice(pagination.first,pagination.last).map(item => item.completed === situation && <Task
                key={item.id} value={item.message} done={item.completed} 
                completed={() => dispatch(actions.completeItem(item.id))}
                removed={() => dispatch(actions.removeItem(item.id))}
                edited={() => {setModal({open:true,currentId:item.id,edit:item.message})}}
                />)
        )
    }
    return (
        <Style.Wrapper>

            {modal.open && <Modal 
            value={modal.edit} 
            closeModal={()=>setModal({...modal,open:false})} 
            submitEdit={editSubmit} 
            setEdit={val => setModal({...modal,edit:val})}/> }

            <Style.Header>TODO APPLICATION</Style.Header>

            <Style.SubmitSection>
            <Input value={task} 
            enterPress={e => e.keyCode === 13 ? submitTask(e) : null} 
            focus={true} 
            changed={e => setTask(e.target.value) }/>
            <Button clicked={submitTask}>ADD</Button>
            </Style.SubmitSection>

            <Style.TaskWrapper>
            {store.find(item => item.completed === false) && <Style.Title>Do It</Style.Title>}
            {Todo(false)}
            {store.find(item => item.completed === true) && <Style.Title>Completed</Style.Title>}
            {Todo(true)}
            </Style.TaskWrapper>

            <Pagination
             count={Math.ceil(store.length / perPage) + 1}
             changed={(value) => setPagination({currentPage:value,first:(value - 1) * perPage,last:value * perPage} )}
            />

        </Style.Wrapper>
    )
    
}

export default TodoBuilder;