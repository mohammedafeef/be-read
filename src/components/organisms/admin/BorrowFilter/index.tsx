import * as S from "./styles";

interface Props {
    state: {
        keyword: string;
        status: string;
    }
    mutation: {
        handleKeywordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        handleStatusChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
    }
}

export const BorrowFilter = (props: Props) => {
    const {state, mutation} = props;
    return (
        <S.Root>
            <S.SearchBar placeholder="Book name" value={state.keyword} onChange={mutation.handleKeywordChange}/>
            {/*<TextInput select label="status" size="small" sx={{minWidth: 100}} value={state.status}*/}
            {/*           onChange={mutation.handleStatusChange}/>*/}
        </S.Root>
    )
}