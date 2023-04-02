import {useMemo, useState} from "react";
import {useQuery} from "react-query";
import {Borrow} from "@app/types/Borrow";
import {getIssuedBooks} from "@app/services/bookIssueService";

const date = new Date().getTime();

export const useBorrow = () => {
    const [status, setStatus] = useState("all");
    const [keyword, setKeyword] = useState("");

    const {data, refetch} = useQuery({
        queryKey: ['admin-requests'],
        async queryFn(): Promise<Borrow[]> {
            const request = await getIssuedBooks();
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
            console.log(status,request,date);
            if (status === "pending" && (Number(request.returnDate) > date || request.isReturned))
                return false;
            if (status === "returned" && !request.isReturned)
                return false;
            if (status === "overdue" && (Number(request.returnDate) < date || request.isReturned))
                return false;

            return !(keyword && !request.book.name.toLowerCase().includes(keyword.toLowerCase()));

        })
    }, [data, keyword, status]);


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
            handleKeywordChange,
            refetch
        }
    }
}