import styled from "styled-components";
import Link from "next/link";
import {TextInput} from "@atoms/index";

export const Title = styled.h1`
  font-size: 30px;
  color: black;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
`;
export const SubmitBtn = styled.button`
  cursor: pointer;
  display: flex;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
  border: none;
  background-color: #3187ed;
  border-radius: 12px;
`;
export const Input = styled(TextInput)`
  margin-top: 20px;
`
export const RegisterLink = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
`;
export const RouteLink = styled(Link)`
  margin-left: 5px;
  color: #3187ed;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;