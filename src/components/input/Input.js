import React from "react";
import styled from "styled-components";

const Inputs = styled.input`
  width: 28rem;
  height: 2.6rem;
  margin: 0 1rem;
  @media (max-width: 825px) {
    width: 20rem;
  }
  @media (max-width: 580px) {
    width: 15rem;
  }
  @media (max-width: 496px) {
    width: 9rem;
  }
`;

const Input = ({ value, changed, enterPress, focus = false }) => {
  return (
    <Inputs type="text" value={value} onKeyDown={enterPress} onChange={changed} autoFocus={focus} />
  );
};

export default Input;
