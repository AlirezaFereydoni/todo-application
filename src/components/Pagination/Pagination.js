import React, { useState } from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 3rem;
  margin: 0 auto;
`;

const Paginate = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid #aeaeae;
  background-color: white;
  color: black;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;

  &:active,
  &:focus,
  &:visited,
  &.active {
    background-color: #aeaeae;
    color: white;
  }
`;

export default function PaginationOutlined(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [];
  for (let i = 1; i < props.count; i++) {
    pageNumber.push(i);
  }

  return (
    <PaginationWrapper>
      {pageNumber.map(item => (
        <Paginate
          key={item}
          className={currentPage === item && "active"}
          onClick={() => props.changed(Number(item), setCurrentPage(item))}
        >
          {item}
        </Paginate>
      ))}
    </PaginationWrapper>
  );
}
