import * as Yup from 'yup';
import {useFormik} from "formik";
import {useMutation} from "react-query";
import {login} from "@app/services/authService";
import toast from "react-hot-toast";
import {getUser} from "@app/services/userService";
import {UserLoginProps} from "@app/types/UserLoginProps";
import useAdminRouter from "@app/lib/route-manager/admin-routes";

export const useForm = () => {
    const router = useAdminRouter();

    const addBookMutation = useMutation(
        async (value: UserLoginProps) => {
            const authRef = await login(value.email, value.password);
            const userRef = await getUser(authRef.user.uid);
            console.log(userRef.data());
            if (userRef.data()?.role === 'admin') {
                return true;
            }
            throw new Error('Invalid email or password');

        },
        {
            onSuccess: async () => {
                toast.success('Book added successfully');
                router.home().navigate();
            },
            onError: (error: any) => {
                toast.error("Something went wrong, please try again");
            }
        },
    );
    const handleSubmit = (values: UserLoginProps) => {
        addBookMutation.mutate(values)
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        author: Yup.string()
            .required('Author is required'),
        genre: Yup.string().required('Genre is required'),
        publisher: Yup.string().required('Publisher is required'),
        language: Yup.string().required('Language is required'),
        image: Yup
            .mixed()
            .required("Image is required"),
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