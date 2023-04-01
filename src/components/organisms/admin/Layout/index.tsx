import {ReactNode, useEffect} from "react";
import * as S from "./styles";
import {Navbar} from "@molecules/admin/Navbar";
import useAdminRouter from "@app/lib/route-manager/admin-routes";

interface Props {
    children: ReactNode,
}

export default function Layout(props: Props) {
    const router = useAdminRouter();

    useEffect(() => {
        if (!localStorage.getItem("admin-auth")) {
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