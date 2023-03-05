import * as S from "./styles";
import {Button} from "@atoms/index";
import {AuthLayout} from "@organisms/index";

export const LoginTemplate = () => {
    return (
        <AuthLayout>
            <S.Title>Login</S.Title>
            <S.Input
                label="Email"
                type="email"
                name="email"
            />
            <S.Input
                label="Password"
                type="password"
                name="password"
            />

            <Button>Login</Button>
        </AuthLayout>
    )
}