import Badge from "@mui/material/Badge";
import * as S from "./styles";

export function Navbar() {
    return (
        <S.Root>
            <S.AppLogo src="/appLogo.png"/>
            <S.AccountActionWrapper>
                <Badge
                    color="primary"
                >
                    <S.ListIcon/>
                </Badge>
                <S.LogoutButton>
                    Logout
                </S.LogoutButton>
            </S.AccountActionWrapper>
        </S.Root>
    );
}