import Layout from "@organisms/user/Layout";
import * as S from "./styles";
import {useWishList} from "@templates/user/WishList/useWishList";
import {WishCard} from "@molecules/user/WishCard";

export const WishListTemplate = () => {
    const {data} = useWishList();
    return (
        <Layout>
            <S.Root>
                <S.Title>Favorite Books</S.Title>
                <S.FavoriteBooksList>
                    {
                        data?.map((book, index) => (
                            <WishCard
                                key={index}
                                id={book.book.id}
                                title={book.book.name}
                                author={book.book.author}
                                image={book.book.image}
                                status={book.book.isAvailable ? "Available" : "In Hand"}
                            />
                        ))
                    }
                </S.FavoriteBooksList>
            </S.Root>
        </Layout>
    )
}