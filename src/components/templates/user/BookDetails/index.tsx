import * as S from "./styles";
import {Img, StatusLabel, Tag} from "@atoms/index";
import Layout from "@organisms/user/Layout";
import {BookDeatailsPageProps} from "@app/types/BookDeatailsPageProps";
import {useBookDetails} from "@templates/user/BookDetails/useBookDetails";

export default function BookDetailsTemplate(props: BookDeatailsPageProps) {
    const {like, handleLike} = useBookDetails();
    return (
        <Layout>
            <S.Root>
                <S.ImageWrapper>
                    <Img
                        src={props.image}/>
                </S.ImageWrapper>
                <S.ContentWrapper>
                    <S.WishListWrapper>
                        {like ? <S.LikedIcon onClick={handleLike}/> : <S.LikeIcon onClick={handleLike}/>}
                    </S.WishListWrapper>
                    <StatusLabel title={props.isAvailable ? "In Library" : "In Hand"}/>
                    <S.Title>{props.name}</S.Title>
                    <S.Author>{props.author}</S.Author>

                    <S.TagsWrapper>
                        <Tag title={props.genre}/>
                        <Tag title={props.publisher}/>
                        <Tag title={props.language}/>
                    </S.TagsWrapper>
                    <S.Summary>{props.summary}
                    </S.Summary>
                </S.ContentWrapper>
            </S.Root>
        </Layout>
    )
}