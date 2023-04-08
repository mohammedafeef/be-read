import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  padding: 15px;
  border-bottom: .5px solid rgba(0, 0, 0, 0.1);
`

export const BookThumbnail = styled.div`
  width: 75px;
  height: 125px;
`

export const BookInfo = styled.div`
  flex: 1;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`
export const Title = styled.h3`
    font-size:15px;
    font-weight: 500;
`

export const Author = styled.p`
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
`

export const DateWrapper = styled.div`
  display: flex;
  column-gap: 10px;
`

export const DateConatiners = styled.div`
  font-size: 12px;
  color: gray;
`

export const FineText = styled.div`
  font-size: 12px;
  color: red;`