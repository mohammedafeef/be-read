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
                    <S.BooksListIcon/> Books
                </Badge>
                <Badge
                    color="primary"
                >
                    <S.BorrowListIcon/> Borrow
                </Badge>
                <S.LogoutButton>
                    Logout
                </S.LogoutButton>
            </S.AccountActionWrapper>
        </S.Root>
    );
}