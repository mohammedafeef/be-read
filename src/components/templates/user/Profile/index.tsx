import Layout from "@organisms/user/Layout";
import * as S from "./styles";

export const ProfileTemplate = () => {
    return (
        <Layout>
            <S.Root>
                <S.Title>Account details</S.Title>
                <S.ContentWrapper>
                    <S.HeaderText>Full Name</S.HeaderText>
                    <S.ContentText>John Doe</S.ContentText>
                </S.ContentWrapper>
                <S.ContentWrapper>
                    <S.HeaderText>Username</S.HeaderText>
                    <S.ContentText>afeef@gmail.com</S.ContentText>
                </S.ContentWrapper>
                <S.ContentWrapper>
                    <S.HeaderText>Email</S.HeaderText>
                    <S.ContentText>afeef@gmail.com</S.ContentText>
                </S.ContentWrapper>
                <S.ContentWrapper>
                    <S.HeaderText>Phone</S.HeaderText>
                    <S.ContentText>9991050200</S.ContentText>
                </S.ContentWrapper>
            </S.Root>
        </Layout>
    )
}