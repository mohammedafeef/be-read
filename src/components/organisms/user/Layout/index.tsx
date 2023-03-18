import {ReactNode} from "react";
import * as S from "./styles";
import {Navbar} from "@molecules/user/Navbar";

interface Props {
    children: ReactNode,
}

export default function Layout(props: Props) {
    return (
        <S.Root>
            <Navbar/>
            <S.Content>
                {
                    props.children
                }
            </S.Content>
        </S.Root>
    )
}