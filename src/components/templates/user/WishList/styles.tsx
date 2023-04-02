import styled from "styled-components";

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`
export const Root = styled.div`
  display: flex;
  flex-direction: column;
`

export const FavoriteBooksList = styled.div`
  display: flex;
  flex-direction: column;
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