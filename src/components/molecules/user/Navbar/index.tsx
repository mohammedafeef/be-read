import Badge from "@mui/material/Badge";
import * as S from "./styles";

export function Navbar() {
    return (
        <S.Root>
            <S.AppLogo src="/appLogo.png"/>
            <S.SearchContainer>
                <S.SearchInput placeholder="Search for books"/>
                <S.SearchButton><S.SearchIcon/></S.SearchButton>
            </S.SearchContainer>
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