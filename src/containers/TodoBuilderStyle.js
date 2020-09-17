import styled from "styled-components";

export const Wrapper = styled.div`
width:50rem;
height:90%;
min-height:80vh;
border-radius:0.8rem;
border:1px solid #aeaeae;
margin: 3.5rem auto;
padding:2rem 0;
display:flex;
flex-direction:column;
overflow:hidden;
@media(max-width:825px) {
    width: 35rem;
}
@media(max-width:580px) {
    width:30rem;
}
@media(max-width:496px) {
    width:19rem;
}
`;

export const TaskWrapper = styled(Wrapper)`
    min-height:5rem;
    height:70%;
    width:45rem;
    padding:2rem 0;
    border:none;
    margin: 0 auto;
    justify-content:center;
    align-items:center;
    @media(max-width:825px) {
    width: 30rem;
    }
    @media(max-width:580px) {
    width:25rem;
    }
    @media(max-width:496px) {
    width:16rem;
    }
`;

export const SubmitSection = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:0 auto;
@media(max-width:825px) {
    max-width:29rem;
    margin:0 auto;
}
`;

export const Header = styled.h1`
font-size:2.5rem;
color:${props => props.headerColor ? props.headerColor : "green"};
margin:0rem auto 2.5rem auto;
@media(max-width:496px) {
    font-size:1.5rem;
    }
`;


export const Title = styled.h3`
font-size:1rem;
justify-self: flex-end;
width: 90%;
color:#aeaeae;
margin-left:2rem;

`;