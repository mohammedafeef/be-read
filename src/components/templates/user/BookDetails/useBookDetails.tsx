import {useMutation, useQuery} from "react-query";
import {getUserById} from "@app/services/userService";
import {getBookById} from "@app/services/bookService";
import toast from "react-hot-toast";
import useUserRouter from "@app/lib/route-manager/user-routes";
import {getBookLikeByStudentAndBook, likeBook, unlikeBook} from "@app/services/bookLikeService";

export const useBookDetails = () => {
    const router = useUserRouter();
    const id = router.router.query.id as string;
    const {data, refetch} = useQuery({
        queryKey: ['like'],
        async queryFn(): Promise<boolean> {
            const likeRef = await getBookLikeByStudentAndBook(localStorage.getItem('user-auth') as string, id);
            let like = false;
            likeRef.forEach(async (doc: any) => {
                if (doc.data().student.id === localStorage.getItem('user-auth'))
                    like = true;
            });
            return like;
        }
    });
    const issueBookMutation = useMutation(
        async (isLiked: boolean) => {
            console.log(isLiked);
            if (isLiked) {
                const likeRef = await getBookLikeByStudentAndBook(localStorage.getItem('user-auth') as string, id);
                likeRef.forEach(async (doc: any) => {
                    await unlikeBook(doc.id);
                });
                toast.success('Book removed from your wishlist');

            } else {
                const student = await getUserById(localStorage.getItem('user-auth') as string);
                const book = await getBookById(id);
                if (!book.data() || !student.data())
                    throw Error("NOT EXISTS");
                await likeBook({
                    book: {
                        id: book.id,
                        ...book.data()
                    },
                    student: {
                        id: student.id,
                        ...student.data()
                    }
                });
                toast.success('Book added to your wishlist');
            }
            refetch();
        },
        {
            onError: () => {
                toast.error("Something went wrong, please try again");
            }
        },
    );
    const handleLike = async () => {
        issueBookMutation.mutate(data as boolean);
    }

    return {
        like: data,
        handleLike
    }
}