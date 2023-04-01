import * as S from "./styles";
import {OptionsList} from "@app/types/OptionsList";
import SelectInput from "@atoms/SelectInput";


interface Props {
    options?: OptionsList;
    state: {
        author: string;
        genre: string;
        language: string;
        publisher: string;
    };
    mutation: {
        handleAuthorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        handleGenreChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        handleLanguageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        handlePublisherChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    };
}

export const BooksFilter = (props: Props) => {
    const {state, mutation, options} = props;
    return (
        <S.Root>
            <S.Title>Filters</S.Title>
            <S.InputContainer>
                <S.InputWrapper>
                    <SelectInput
                        name="author"
                        value={state.author}
                        onChange={mutation.handleAuthorChange}
                        options={options?.authors}
                        label="Author"
                        select
                        fullWidth
                    />
                </S.InputWrapper>
                <S.InputWrapper>
                    <SelectInput
                        name="genre"
                        value={state.genre}
                        onChange={mutation.handleGenreChange}
                        options={options?.genres}
                        label="Genre"
                        select
                        fullWidth
                    />
                </S.InputWrapper>
                <S.InputWrapper>
                    <SelectInput
                        name="language"
                        value={state.language}
                        onChange={mutation.handleLanguageChange}
                        options={options?.languages}
                        label="Language"
                        select
                        fullWidth
                    />
                </S.InputWrapper>
                <S.InputWrapper>
                    <SelectInput
                        name="publisher"
                        value={state.publisher}
                        onChange={mutation.handlePublisherChange}
                        options={options?.publishers}
                        label="Publisher"
                        select
                        fullWidth
                    />
                </S.InputWrapper>
            </S.InputContainer>
        </S.Root>
    )
}