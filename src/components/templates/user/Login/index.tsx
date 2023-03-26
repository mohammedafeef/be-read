import * as S from "./styles";
import {Button} from "@atoms/index";
import {AuthLayout} from "@organisms/index";
import {useForm} from "@templates/user/Login/useForm";
import {SIGNUP_URL} from "@app/lib/route-manager/user-routes";

export const LoginTemplate = () => {
    const {form} = useForm();
    return (
        <AuthLayout>
            <S.Title>Login</S.Title>
            <S.Input
                label="Email"
                type="email"
                name="email"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.email}
                error={form.touched.email && Boolean(form.errors.email)}
                helperText={form.errors.email}
            />
            <S.Input
                label="Password"
                type="password"
                name="password"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.password}
                error={form.touched.password && Boolean(form.errors.password)}
                helperText={form.errors.password}
            />

            <Button onClick={() => form.handleSubmit()}>Login</Button>
            <S.RegisterLink>
                {"Don't"} have an account?
                <S.RouteLink href={SIGNUP_URL}>
                    Register
                </S.RouteLink>
            </S.RegisterLink>
        </AuthLayout>
    )
}