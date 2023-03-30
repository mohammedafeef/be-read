import * as Yup from 'yup';
import {useFormik} from "formik";
import {useMutation, useQuery} from "react-query";
import toast from "react-hot-toast";
import useAdminRouter from "@app/lib/route-manager/admin-routes";
import {
    createBook,
    getAuthors,
    getGenres,
    getLanguages,
    getPublishers,
    uploadBookImage
} from "@app/services/bookService";
import {BookCreationProps} from "@app/types/BookCreationProps";
import {OptionsList} from "@app/types/OptionsList";
import {Option} from "@app/types/Option";
import {getDownloadURL} from "@firebase/storage";


export const useForm = () => {
    const router = useAdminRouter();

    const {data} = useQuery({
        queryKey: ['options'],
        queryFn: async (): Promise<OptionsList> => {
            const langauges = await getLanguages();
            const genres = await getGenres();
            const publishers = await getPublishers();
            const authors = await getAuthors();
            const options: OptionsList = {
                languages: [],
                genres: [],
                publishers: [],
                authors: []
            }
            langauges.forEach((doc) => {
                options.languages = [...options.languages as Option[], {
                    value: doc.data().value,
                    label: doc.data().value
                } as Option]
            });
            genres.forEach((doc) => {
                options.genres = [...options.genres as Option[], {
                    value: doc.data().value,
                    label: doc.data().value
                } as Option]
            });
            publishers.forEach((doc) => {
                options.publishers = [...options.publishers as Option[], {
                    value: doc.data().value,
                    label: doc.data().value
                } as Option]
            });
            authors.forEach((doc) => {
                options.authors = [...options.authors as Option[], {
                    value: doc.data().value,
                    label: doc.data().value
                } as Option]
            })
            return options;

        },
        onError: (error: any) => console.error("happened man", error)

    });

    const addBookMutation = useMutation(
        async (value: BookCreationProps) => {
            const imageRef = await uploadBookImage(value.image as File);
            value.image = await getDownloadURL(imageRef.ref);
            await createBook(value);
        },
        {
            onSuccess: async () => {
                toast.success('Book added successfully');
                router.home().navigate();
            },
            onError: () => {
                toast.error("Something went wrong, please try again");
            }
        },
    );
    const handleSubmit = (values: BookCreationProps) => {
        addBookMutation.mutate(values)
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        author: Yup.string()
            .required('Author is required'),
        genre: Yup.string().required('Genre is required'),
        publisher: Yup.string().required('Publisher is required'),
        language: Yup.string().required('Language is required'),
        summary: Yup.string().required('Summary is required'),
        image: Yup
            .mixed()
            .required("Image is required"),
    });

    const form = useFormik({
        initialValues: {
            name: '',
            summary: '',
            author: '',
            publisher: '',
            language: '',
            genre: '',
            image: '',
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