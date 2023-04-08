import {useMemo, useState} from "react";
import {useQuery} from "react-query";
import {Borrow} from "@app/types/Borrow";
import {getIssuedBooksByUserId} from "@app/services/bookIssueService";

export const useBorrow = () => {
    const [status, setStatus] = useState("all");
    const [keyword, setKeyword] = useState("");

    const {data} = useQuery({
        queryKey: ['admin-requests'],
        async queryFn(): Promise<{ requestList: Borrow[]; counts: { pending: number; returned: number; } }> {
            const request = await getIssuedBooksByUserId(localStorage.getItem("user-auth") as string);
            const requestList: Borrow[] = [];
            const counts = {
                pending: 0,
                returned: 0
            }
            request.forEach((doc: any) => {
                if (doc.data().isReturned) {
                    counts.returned = counts.returned + 1;
                } else {
                    counts.pending = counts.pending + 1;
                }
                requestList.push({
                    id: doc.id,
                    ...doc.data()
                } as Borrow)
            });
            return {requestList, counts};
        }
    });

    const issuedBooks = useMemo(() => {
        return data?.requestList?.filter((request: Borrow) => {
            return !(keyword && !request.book.name.toLowerCase().includes(keyword.toLowerCase()));

        })
    }, [data, keyword]);


    const handleStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setStatus(event.target.value as string);
    }
    const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    }

    return {
        values: {
            counts: data?.counts,
            issuedBooks,
            states: {
                status,
                keyword
            }
        },
        mutation: {
            handleStatusChange,
            handleKeywordChange
        }
    }
}