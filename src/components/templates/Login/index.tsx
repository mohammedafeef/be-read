import * as S from "./styles";
import {Button, TextInput} from "@atoms/index";
import {AuthLayout} from "@organisms/index";

export const LoginTemplate = () => {
    return (
        <AuthLayout>
            <S.Title>Login</S.Title>
            <TextInput
                label="Email"
                type="email"
                name="email"
                sx={{mt:2}}
            />
            <TextInput
                label="Password"
                type="password"
                name="password"
                sx={{mt:2}}
            />

            <Button>Login</Button>
            <S.RegisterLink>
                {"Don't"} have an account?
                <S.RouteLink href="/register">
                    Register
                </S.RouteLink>
            </S.RegisterLink>
        </AuthLayout>
    )
}