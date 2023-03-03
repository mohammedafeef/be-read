import * as S from "./styles";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

export default function LoginLayout(props:Props) {
    return (
        <S.Container>
            <S.ContentWrapper>
                <S.Content>
                    {props.children}
                </S.Content>
            </S.ContentWrapper>
        </S.Container>
    )
}