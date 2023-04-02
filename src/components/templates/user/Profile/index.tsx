import Layout from "@organisms/user/Layout";
import * as S from "./styles";
import {useQuery} from "react-query";
import {User} from "@app/types/User";
import {getUserById} from "@app/services/userService";

export const ProfileTemplate = () => {
    const {data} = useQuery({
        queryKey: ['profile'],
        async queryFn(): Promise<User> {
            const userRef = await getUserById(localStorage.getItem('user-auth') as string);
            return {
                id: userRef.id,
                ...userRef.data()
            } as User;
        }
    });
    return (
        <Layout>
            <S.Root>
                <S.Title>Account details</S.Title>
                <S.ContentWrapper>
                    <S.HeaderText>Full Name</S.HeaderText>
                    <S.ContentText>{data?.fullname}</S.ContentText>
                </S.ContentWrapper>
                <S.ContentWrapper>
                    <S.HeaderText>Username</S.HeaderText>
                    <S.ContentText>{data?.username}</S.ContentText>
                </S.ContentWrapper>
                <S.ContentWrapper>
                    <S.HeaderText>Email</S.HeaderText>
                    <S.ContentText>{data?.email}</S.ContentText>
                </S.ContentWrapper>
                <S.ContentWrapper>
                    <S.HeaderText>Phone</S.HeaderText>
                    <S.ContentText>{data?.phone}</S.ContentText>
                </S.ContentWrapper>
            </S.Root>
        </Layout>
    )
}