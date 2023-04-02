import Layout from "@organisms/user/Layout";
import * as S from "./styles";
import {Button} from "@atoms/index";
import {BookListCard} from "@molecules/user/BooksListCard";
import {useSearch} from "@templates/user/Books/useSearch";
import SelectInput from "@atoms/SelectInput";

export default function BooksTemplate() {
    const {values, mutation} = useSearch();
    return (
        <Layout>
            <S.Root>
                <S.FilterWrapper>
                    <S.FilterTitle>Filters</S.FilterTitle>
                    <SelectInput
                        name="author"
                        value={values.states.author}
                        onChange={mutation.handleAuthorChange}
                        options={values?.options?.authors}
                        label="Select Author"
                        select
                    />
                    <SelectInput
                        name="genre"
                        value={values.states.genre}
                        onChange={mutation.handleGenreChange}
                        options={values?.options?.genres}
                        label="Select Genre"
                        select
                    />
                    <SelectInput
                        name="language"
                        value={values.states.language}
                        onChange={mutation.handleLanguageChange}
                        options={values?.options?.languages}
                        label="Select Language"
                        select
                    />
                    <SelectInput
                        name="publisher"
                        value={values.states.publisher}
                        onChange={mutation.handlePublisherChange}
                        options={values?.options?.publishers}
                        label="Select Publisher"
                        select
                    />
                    <Button onClick={mutation.handleReset}>Reset</Button>
                    <Button>Apply</Button>
                </S.FilterWrapper>
                <S.ContentWrapper>
                    <S.ContentTitle>Filtered Books</S.ContentTitle>
                    {
                        values?.books?.length === 0 ? (<S.EmptyList>No books found</S.EmptyList>) : (
                            <S.BooksWrapper>
                                {
                                    values?.books?.map((book, index) => (
                                        <BookListCard
                                            key={index}
                                            id={book.id}
                                            title={book.name}
                                            author={book.author}
                                            image={book.image}
                                            status={book.isAvailable ? "Available" : "In Hand"}
                                        />
                                    ))
                                }
                            </S.BooksWrapper>
                        )
                    }
                </S.ContentWrapper>
            </S.Root>
        </Layout>
    )
}