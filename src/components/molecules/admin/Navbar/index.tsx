import Badge from "@mui/material/Badge";
import * as S from "./styles";

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LowPriorityIcon from '@mui/icons-material/LowPriority';

export function Navbar() {
    return (
        <S.Root>
            <S.AppLogo src="/appLogo.png"/>
            <S.AccountActionWrapper>
                <S.ActionButton
                >
                   <LibraryBooksIcon/> Books
                </S.ActionButton>
                <S.ActionButton
                >
                    <LowPriorityIcon/> Borrow
                </S.ActionButton>
                <S.LogoutButton>
                    Logout
                </S.LogoutButton>
            </S.AccountActionWrapper>
        </S.Root>
    );
}