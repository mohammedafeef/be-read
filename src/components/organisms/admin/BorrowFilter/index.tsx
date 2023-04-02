import * as S from "./styles";
import SelectInput from "@atoms/SelectInput";

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
            <SelectInput select label="status" size="small" sx={{width: 150}} value={state.status}
                         onChange={mutation.handleStatusChange}
                         options={[
                             {value: "all", label: "All"},
                             {value: "pending", label: "Pending"},
                             {value: "overdue", label: "Overdue"},
                             {value: "returned", label: "Returned"}
                         ]}
            />
        </S.Root>
    )
}