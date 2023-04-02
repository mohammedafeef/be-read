import styled from "styled-components";

export const Root = styled.div`
  width:200px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: .5px solid rgba(0, 0, 0, 0.1);
  padding: 15px;
  row-gap: 10px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.01);
  }
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
