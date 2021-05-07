import React from "react";
import styled from "styled-components";
import Input from "./../input/Input";
import Button from "./../Button/Button";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
`;

const Popup = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 45rem;
  padding: 2rem 3.5rem;
  height: 10rem;
  border-radius: 0.8rem;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media (max-width: 825px) {
    width: 30rem;
  }
  @media (max-width: 580px) {
    width: 25rem;
  }
  @media (max-width: 496px) {
    width: 16rem;
  }
`;

const Modal = ({ value, submitEdit, closeModal, setEdit }) => {
  return (
    <>
      <Wrapper onClick={closeModal} />
      <Popup>
        <Input
          value={value}
          enterPress={e => (e.keyCode === 13 ? submitEdit(e) : null)}
          focus={true}
          changed={e => setEdit(e.target.value)}
        />
        <Button clicked={submitEdit}>Edit</Button>
      </Popup>
    </>
  );
};

export default Modal;
