import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(10, 10, 10, 0.05);
  border: .3px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  row-gap: 20px;
`
export const Title = styled.div`
    font-size: 25px;
    font-weight: 500;
`

export const ContentWrapper = styled.div`
  display: flex;
`

export const HeaderText = styled.div`
  font-size: 15px;
  font-weight: 500;
  width: 150px;
  text-align: left;
`

export const ContentText = styled.div`
  font-size: 13px;
  margin-left: 20px;
`