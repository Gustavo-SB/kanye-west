import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 0.5rem;
`;

export const Button = styled.button`
  background: #000;

  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  div {
    padding-right: 0.5rem;
  }
`;