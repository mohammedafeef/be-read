import * as S from "./styles";
import {TextInput} from "@atoms/index";

export const BorrowFilter = () => {
    return (
        <S.Root>
            <S.SearchBar placeholder="Book name"/>
            <TextInput select label="status" size="small" sx={{minWidth: 100}}/>
        </S.Root>
    )
}