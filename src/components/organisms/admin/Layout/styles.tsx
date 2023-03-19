import styled from "styled-components";
export const horizontalSpacing = 150;
export const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  padding: 0 150px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 120px;
  padding: 20px 0;
`