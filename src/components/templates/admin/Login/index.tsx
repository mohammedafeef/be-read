import * as S from "./styles";
import {Button} from "@atoms/index";
import {AuthLayout} from "@organisms/index";
import {useForm} from "@templates/admin/Login/useForm";

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
        </AuthLayout>
    )
}