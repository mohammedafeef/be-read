import * as Yup from 'yup';
import {useFormik} from "formik";
import {UserRegistrationProps} from "@customTypes/UserRegistrationProps";
import {useMutation} from "react-query";
import {signup} from "@app/services/authService";
import toast from "react-hot-toast";
import {createUser} from "@app/services/userService";
import useUserRouter from "@app/lib/route-manager/user-routes";

export const useForm = () => {
    const router = useUserRouter();

    const userSignupMutation = useMutation(
        async (value: UserRegistrationProps) => {
            const userRef = await signup(value.email, value.password);
            return await createUser(userRef.user.uid, value.fullname, value.email, value.username, value.phoneNumber)
        },
        {
            onSuccess: async () => {
                toast.success('Account created successfully');
                router.login().navigate();
            },
            onError: (error: any) => {
                toast.error("User already exists");
            }
        },
    );
    const handleSubmit = (values: UserRegistrationProps) => {
        userSignupMutation.mutate(values);
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'should be 8 chars minimum.'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required("Confirm password is required"),
        username: Yup.string().required('Username is required'),
        fullname: Yup.string().required('Fullname is required'),
        phoneNumber: Yup.number().test('len', 'Invalid phone number', val => val?.toString().length === 10).required('Phone number is required'),
    });

    const form = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            username: '',
            fullname: '',
            phoneNumber: '',
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