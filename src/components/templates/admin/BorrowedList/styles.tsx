import styled from "styled-components";

export const Root = styled.div`
  display: flex;
`
export const ReaderInfoContainer = styled.div`
  width: 200px;
  height: fit-content;
  border: .3px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: rgba(10, 10, 10, 0.05);
  padding: 15px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Count = styled.div`
  font-size: 20px;
  font-weight: 500;
`
export const CountLabel = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`
export const BorrowContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`
export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`
export const FilterWrapper = styled.div`
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

export const BorrowedBooksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`