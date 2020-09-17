import React from "react";
import styled from "styled-components";

const Sec = styled.div`
display:grid;
grid-template-columns:1fr 15fr 1fr 1fr;
grid-gap:0.5rem;
padding: 0.5rem 1.5rem;
width:36rem;
height: 3rem;
border:1px solid #aeaeae;
align-items:center;
border-radius:0.5rem;
margin: 0.8rem 0;
@media(max-width:825px) {
    width:25rem;
}
@media(max-width:580px) {
    width:20rem;
}
@media(max-width:496px) {
    width:12rem;
}
`;

const Input = styled.input`
width:1rem;
height:1rem;
`;

const Message = styled.div`
text-decoration:${props => props.complete === true  ? "line-through" : "none"};
overflow:hidden;
`;

const Icon = styled.i`
font-size:2.2rem;
color:red;
font-weight:bold;
cursor:pointer;
`;


const Task = props => {
return (
    <Sec>
        <Input type="checkbox" onChange={props.completed} checked={props.done}/>
        <Message complete={props.done}>{props.value}</Message>
        <Icon onClick={props.edited} className="fas fa-edit" style={{fontSize:"1rem"}}></Icon>
        <Icon onClick={props.removed}>&#215;</Icon>
    </Sec>
)
}

export default Task;