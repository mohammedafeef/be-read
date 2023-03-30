import * as Yup from 'yup';
import {useFormik} from "formik";
import {useMutation} from "react-query";
import {login} from "@app/services/authService";
import toast from "react-hot-toast";
import { getUserById} from "@app/services/userService";
import {UserLoginProps} from "@app/types/UserLoginProps";
import useAdminRouter from "@app/lib/route-manager/admin-routes";

export const useForm = () => {
    const router = useAdminRouter();

    const loginMutation = useMutation(
        async (value: UserLoginProps) => {
            const authRef = await login(value.email, value.password);
            const userRef = await getUserById(authRef.user.uid);
            if (userRef.data()?.role === 'admin') {
                return true;
            }
            throw new Error('Invalid email or password');

        },
        {
            onSuccess: async () => {
                toast.success('Logged in successfully');
                router.home().navigate();
            },
            onError: () => {
                toast.error("Invalid email or password");
            }
        },
    );
    const handleSubmit = (values: UserLoginProps) => {
        loginMutation.mutate(values)
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    });

    const form = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
        validateOnChange: false,
        validateOnBlur: false,
    });

    return {
        form
    }
}