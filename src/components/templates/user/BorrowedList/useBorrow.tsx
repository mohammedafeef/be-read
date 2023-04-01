import {useMemo, useState} from "react";
import {useQuery} from "react-query";
import {Borrow} from "@app/types/Borrow";
import {getIssuedBooksByUserId} from "@app/services/bookIssueService";

export const useBorrow = () => {
    const [status, setStatus] = useState("all");
    const [keyword, setKeyword] = useState("");

    const {data} = useQuery({
        queryKey: ['admin-requests'],
        async queryFn(): Promise<Borrow[]> {
            const request = await getIssuedBooksByUserId(localStorage.getItem("user-auth") as string);
            const requestList: Borrow[] = [];
            request.forEach((doc: any) => {
                requestList.push({
                    id: doc.id,
                    ...doc.data()
                } as Borrow)
            });
            return requestList;
        }
    });

    const issuedBooks = useMemo(() => {
        return data?.filter((request: Borrow) => {
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