import Badge from "@mui/material/Badge";
import * as S from "./styles";
import useUserRouter from "@app/lib/route-manager/user-routes";
import {useState} from "react";
import toast from "react-hot-toast";

export function Navbar() {
    const router = useUserRouter();
    const [keyword, setKeyword] = useState<string>(router.router.query.keyword as string || "");
    const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

    const handleSearch = () => {
        if (keyword)
            router.book.search({keyword: keyword}).navigate();
    }

    const handleLogout = () => {
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
                <Badge
                    color="primary"
                    onClick={() => router.home().navigate()}
                >
                    <S.ListIcon/>
                </Badge>
                <Badge
                    color="primary"
                    onClick={() => router.borrow.list().navigate()}
                >
                    <S.BorrowIcon/>
                </Badge>

                <S.LogoutButton onClick={handleLogout}>
                    Logout
                </S.LogoutButton>
            </S.AccountActionWrapper>
        </S.Root>
    );
}