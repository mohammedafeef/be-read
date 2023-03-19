import * as S from "./styles";
import {Img, Tag} from "@atoms/index";
import Layout from "@organisms/user/Layout";

export default function BookDetailsTemplate() {
    return (
        <Layout>
            <S.Root>
                <S.ImageWrapper>
                    <Img
                        src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ="/>
                </S.ImageWrapper>
                <S.ContentWrapper>
                    <S.Author>Paulo coelo</S.Author>
                    <S.Title>The Alchemist</S.Title>
                    <S.TagsWrapper>
                        <Tag title="Adventure"/>
                        <Tag title="Fantasy"/>
                        <Tag title="Novel"/>
                    </S.TagsWrapper>
                    <S.Summary>The Alchemist is a classic novel in which a boy named Santiago embarks on a journey
                        seeking
                        treasure in the Egyptian pyramids after having a recurring dream about it and on the way meets
                        mentors, falls in love, and most importantly, learns the true importance of who he is and how to
                        improve himself and focus on what really matters in life.
                    </S.Summary>
                </S.ContentWrapper>
            </S.Root>
        </Layout>
    )
}