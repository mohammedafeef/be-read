import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  row-gap: 10px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 100px;
  height: 150px;
`
export const Title = styled.h3`
  font-size: 15px;
  font-weight: 500;
  color: #000;
`;

export const Author = styled.p`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
`;
