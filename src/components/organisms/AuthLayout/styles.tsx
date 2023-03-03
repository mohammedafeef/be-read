import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  @media screen and (max-width: 450px) {
    padding:10px;
  }
`;
export const RouterLink = styled(Link)`
  align-self: flex-start;
  justify-self: flex-start;
`;
export const Logo = styled.img`
  cursor: pointer;
  height: 100px;
  width: 200px;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0 9px 26px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  @media screen and (max-width: 450px) {
    width:85%;
  }
`;