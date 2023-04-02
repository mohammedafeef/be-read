import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding:15px;
`
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ResetButton = styled.button`
  cursor: pointer;
  padding: 8px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  border: none;
  background-color: #3187ed;
  border-radius: 8px;
  height: fit-content;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.01);
  }
`
export const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 15px;
`

export const InputWrapper = styled.div`
  width: 48%;
`