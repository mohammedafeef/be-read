import * as S from "./styles";
import {Img, Tag} from "@atoms/index";
import Layout from "@organisms/user/Layout";
import {BookDeatailsPageProps} from "@app/types/BookDeatailsPageProps";

export default function BookDetailsTemplate(props: BookDeatailsPageProps) {
    return (
        <Layout>
            <S.Root>
                <S.ImageWrapper>
                    <Img
                        src={props.image}/>
                </S.ImageWrapper>
                <S.ContentWrapper>
                    <S.Author>{props.author}</S.Author>
                    <S.Title>{props.name}</S.Title>
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