import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`
export const SearchBar = styled.input`
  width: 200px;
  outline: none;
  padding: 8px 12px;
  border: none;
  font-size: 15px;
  color: black;
  background-color: rgba(5, 5, 5, .05);
  border-radius: 10px;

  :focus {
    outline: none;
  }
`