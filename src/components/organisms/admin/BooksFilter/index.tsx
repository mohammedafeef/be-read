import * as S from "./styles";
import {TextInput} from "@atoms/index";

export const BooksFilter = () => {
    return (
        <S.Root>
            <S.Title>Filters</S.Title>
            <S.InputContainer>
                <S.InputWrapper>
                    <TextInput
                        label="Author"
                        select
                        fullWidth
                    />
                </S.InputWrapper>
                <S.InputWrapper>
                    <TextInput
                        label="Genre"
                        select
                        fullWidth
                    />
                </S.InputWrapper>
                <S.InputWrapper>
                    <TextInput
                        label="Language"
                        select
                        fullWidth
                    />
                </S.InputWrapper>
                <S.InputWrapper>
                    <TextInput
                        label="Publisher"
                        select
                        fullWidth
                    />
                </S.InputWrapper>
            </S.InputContainer>
        </S.Root>
    )
}