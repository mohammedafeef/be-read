import {useQuery} from "react-query";
import {LikedBook} from "@app/types/LikedBook";
import {getBookLikesByStudent} from "@app/services/bookLikeService";

export const useWishList = () => {

    const {data} = useQuery({
        queryKey: ['admin-wishlist'],
        async queryFn(): Promise<LikedBook[]> {
            const likesRef = await getBookLikesByStudent(localStorage.getItem('user-auth') as string);
            let wishList: LikedBook[] = [];
            likesRef.forEach(async (doc: any) => {
                wishList.push({
                    id: doc.id,
                    ...doc.data()
                } as LikedBook);
            });
            return wishList;
        }
    });


    return {
        data
    }
}