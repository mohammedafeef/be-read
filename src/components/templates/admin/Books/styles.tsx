import styled from "styled-components";

export const BooksList  = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`
export const HeaderWrapper = styled.div`
  display: flex;
  gap: 20px;
`
export const CreateBookButton = styled.button`
  cursor: pointer;
  padding: 8px 10px;
  font-size: 13px;
  font-weight: 500;
  color: white;
  border: none;
  background-color: #3187ed;
  border-radius: 8px;
  height: fit-content;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.03);
  }
`
export const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 15px;
`