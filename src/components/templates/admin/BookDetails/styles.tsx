import styled from "styled-components";

export const Root = styled.div`
    display: flex;
`

export const ImageWrapper = styled.div`
  width: 300px;
  height: 450px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 0 0 40px;
`

export const Author = styled.p`
  font-size: 15px;
  color: #808080;
`

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
  color: #000;
`

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  gap: 10px;
`

export const Summary = styled.p`
  font-size: 15px;
  color: #000;
`