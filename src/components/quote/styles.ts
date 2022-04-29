import styled from "styled-components";

export const Box = styled.div`
  background: #f5f5f5;
  border-radius: 5px;
  padding: 20px;
  width: 1000px;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: #000000;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Phrase = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
`;