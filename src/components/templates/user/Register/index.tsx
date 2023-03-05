import {AuthLayout} from "@organisms/index";
import * as S from "./styles";
import {Button} from "@atoms/index";

export default function RegisterTemplate (){
    return (
        <AuthLayout>
            <S.Title>Register</S.Title>
            <S.Input
                label="username"
                name="username"
            />
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
            <Button>Register</Button>
            <S.LoginLink>
                Already have an account? <S.RouteLink href="/login">Login</S.RouteLink>
            </S.LoginLink>
        </AuthLayout>
    )
}