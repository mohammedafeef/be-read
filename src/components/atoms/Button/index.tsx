import styled from "styled-components";
import {HTMLProps} from "react";

export const Btn = styled.button`
  cursor: pointer;
  display: flex;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
  border: none;
  background-color: #3187ed;
  border-radius: 12px;
`;

type Props = HTMLProps<HTMLButtonElement>;
export default function Button (props: Props){
    return (
        <Btn>
            {props.children}
        </Btn>
    )
}
