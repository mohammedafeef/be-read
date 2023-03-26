import {AuthLayout} from "@organisms/index";
import * as S from "./styles";
import {Button} from "@atoms/index";
import {useForm} from "@templates/user/Register/useForm";
import {LOGIN_URL} from "@app/lib/route-manager/user-routes";

export default function RegisterTemplate() {
    const {form} = useForm();
    return (
        <AuthLayout>
            <S.Title>Register</S.Title>
            <S.Input
                label="Full Name"
                name="fullname"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.fullname}
                error={form.touched.fullname && Boolean(form.errors.fullname)}
                helperText={form.errors.fullname}
            />
            <S.Input
                label="Phone Number"
                name="phoneNumber"
                type="number"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.phoneNumber}
                error={form.touched.phoneNumber && Boolean(form.errors.phoneNumber)}
                helperText={form.errors.phoneNumber}
            />
            <S.Input
                label="username"
                name="username"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.username}
                error={form.touched.username && Boolean(form.errors.username)}
                helperText={form.errors.username}
            />
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
            <S.Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.confirmPassword}
                error={form.touched.confirmPassword && Boolean(form.errors.confirmPassword)}
                helperText={form.errors.confirmPassword}
            />
            <Button onClick={() => form.handleSubmit()}>Register</Button>
            <S.LoginLink>
                Already have an account? <S.RouteLink href={LOGIN_URL}>Login</S.RouteLink>
            </S.LoginLink>
        </AuthLayout>
    )
}