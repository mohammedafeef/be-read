import styled from "styled-components";

export const Root = styled.div`
    display: flex;
  
`

export const FilterWrapper = styled.div`
  min-width: 200px;
  height: fit-content;
  padding: 20px;
  background-color: rgba(5, 5, 5, .03);
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const FilterTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
`

export const ContentTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
`

export const BooksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
export const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 20px;
  color: gray;
`
