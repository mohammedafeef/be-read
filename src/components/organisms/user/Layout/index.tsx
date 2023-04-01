import {ReactNode, useEffect} from "react";
import * as S from "./styles";
import {Navbar} from "@molecules/user/Navbar";
import useUserRouter from "@app/lib/route-manager/user-routes";

interface Props {
    children: ReactNode,
}

export default function Layout(props: Props) {
    const router = useUserRouter();

    useEffect(() => {
        if (!localStorage.getItem("user-auth")) {
            router.login().navigate();
        }
    }, [])
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