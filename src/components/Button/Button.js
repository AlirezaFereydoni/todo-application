import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 9rem;
  height: 3rem;
  border-radius: 0.2rem;
  border: none;
  background-color: green;
  color: white;
  cursor: pointer;
  @media (max-width: 825px) {
    width: 7rem;
  }
  @media (max-width: 580px) {
    width: 6.5rem;
  }
  @media (max-width: 496px) {
    width: 5rem;
  }
`;

const Button = ({ children = "Submit", clicked }) => {
  return <Btn onClick={clicked}>{children}</Btn>;
};

export default Button;
