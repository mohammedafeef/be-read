import * as Yup from 'yup';
import {useFormik} from "formik";
import {useMutation, useQuery} from "react-query";
import toast from "react-hot-toast";
import useAdminRouter from "@app/lib/route-manager/admin-routes";
import {
    getBookById,
    getBooks, updateBookStatus,
} from "@app/services/bookService";
import {Option} from "@app/types/Option";
import {IssueBookOptions} from "@app/types/IssueBookOptions";
import {getUserById, getUsers} from "@app/services/userService";
import {IssueBookProps} from "@app/types/IssueBookProps";
import {createNewRequest} from "@app/services/bookIssueService";


export const useForm = () => {
    const router = useAdminRouter();

    const {data} = useQuery({
        queryKey: ['options-issue'],
        queryFn: async (): Promise<IssueBookOptions> => {
            const books = await getBooks();
            const users = await getUsers();
            const options: IssueBookOptions = {
                users: [],
                books: []
            }
            books.forEach((doc) => {
                if (doc.data().isAvailable) {
                    options.books = [...options.books as Option[], {
                        value: doc.id,
                        label: doc.data().name,
                    }]
                }
            });
            users.forEach((doc) => {
                options.users = [...options.users as Option[], {
                    label: doc.data().fullname, value: doc.id
                }]
            });

            return options;
        },
        onError: (error: any) => console.error(error)

    });

    const issueBookMutation = useMutation(
        async (value: IssueBookProps) => {
            const student = await getUserById(value.student);
            const book = await getBookById(value.book);
            const returnDate = new Date(value.returnDate);
            const issuedDate = new Date(value.issuedDate);

            if (!book.data() || !student.data())
                throw Error("NOT EXISTS");

            const requestData = {
                ...value,
                returnDate: returnDate.getTime(),
                issuedDate: issuedDate.getTime(),
                book: {
                    ...book.data(),
                    id: value.book,
                },
                student: {
                    ...student.data(),
                    id: value.student,
                }
            };

            await createNewRequest(requestData);
            await updateBookStatus(value.book);

        },
        {
            onSuccess: async () => {
                toast.success('Book issued successfully');
                router.home().navigate();
            },
            onError: () => {
                toast.error("Something went wrong, please try again");
            }
        },
    );
    const handleSubmit = (values: IssueBookProps) => {
        console.log(values);
        issueBookMutation.mutate(values);
    }
    const validationSchema = Yup.object({
        student: Yup.string().required('Select the student'),
        book: Yup.string()
            .required('Select the book'),
        issuedDate: Yup.string().required('Issued date is required'),
        remark: Yup.string().required('Remark is required'),

    });

    const form = useFormik({
        initialValues: {
            student: '',
            book: '',
            issuedDate: '',
            returnDate: '',
            remark: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });

    return {
        form,
        state: {
            options: data
        }
    }
}