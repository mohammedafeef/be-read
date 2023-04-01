import * as S from "./styles";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import useAdminRouter from "@app/lib/route-manager/admin-routes";
import toast from "react-hot-toast";

export function Navbar() {
    const router = useAdminRouter();
    const handleLogout = () => {
        toast.success("Logged out successfully");
        router.login().navigate();
    }
    return (
        <S.Root>
            <S.AppLogo src="/appLogo.png"/>
            <S.AccountActionWrapper>
                <S.ActionButton
                    onClick={() => router.home().navigate()}
                >
                    <LibraryBooksIcon/> Books
                </S.ActionButton>

                <S.ActionButton
                    onClick={() => router.borrow.list().navigate()}

                >
                    <LowPriorityIcon/> Borrow
                </S.ActionButton>
                <S.LogoutButton onClick={handleLogout}>
                    Logout
                </S.LogoutButton>
            </S.AccountActionWrapper>
        </S.Root>
    );
}