import Badge from "@mui/material/Badge";
import * as S from "./styles";
import useUserRouter from "@app/lib/route-manager/user-routes";
import {useState} from "react";
import toast from "react-hot-toast";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LowPriorityIcon from '@mui/icons-material/LowPriority';

export function Navbar() {
    const router = useUserRouter();
    const [keyword, setKeyword] = useState<string>(router.router.query.keyword as string || "");
    const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

    const handleSearch = () => {
        if (keyword)
            router.book.search({keyword: keyword}).navigate();
    }

    const handleLogout = () => {
        localStorage.removeItem("user-auth");
        router.login().navigate();
        toast.success("Logout successfully");
    }


    return (
        <S.Root>
            <S.AppLogo src="/appLogo.png"/>
            <S.SearchContainer>
                <S.SearchInput placeholder="Search for books" value={keyword} onChange={handleKeywordChange}/>
                <S.SearchButton onClick={handleSearch}><S.SearchIcon/></S.SearchButton>
            </S.SearchContainer>
            <S.AccountActionWrapper>
                <S.ActionButton
                    onClick={() => router.home().navigate()}>
                    <LibraryBooksIcon/> Books
                </S.ActionButton>
                <S.ActionButton
                    onClick={() => router.borrow.list().navigate()}

                >
                    <LowPriorityIcon/> Requests
                </S.ActionButton>
                <Badge
                    color="primary"
                    onClick={() => router.wishList().navigate()}
                >
                    <S.WishListIcon/>
                </Badge>
                <Badge
                    color="primary"
                    onClick={() => router.profile().navigate()}
                >
                    <S.AccountIcon/>
                </Badge>

                <S.LogoutButton onClick={handleLogout}>
                    Logout
                </S.LogoutButton>
            </S.AccountActionWrapper>
        </S.Root>
    );
}