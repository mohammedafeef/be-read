import {useRouter} from 'next/router';
import {Route} from "@app/lib/Route";
import {ParsedUrlQueryInput} from "querystring";

export const LOGIN_URL = '/login';
export const SIGNUP_URL = '/register';
export const HOME_URL = '/user';

export const BOOK_URL = '/user/book';

const useUserRouter = () => {
    const router = useRouter();
    return {
        router: router,
        login: () => Route.public(router, LOGIN_URL),
        signup: () => Route.public(router, SIGNUP_URL),
        home: () => Route.private(router, HOME_URL),
        book: {
            search: (query?: ParsedUrlQueryInput,) => Route.private(router, BOOK_URL, query),
            details: (id: string) => Route.private(router, `/user/book/${id}`),
        },
        borrow: {
            list: () => Route.private(router, '/user/borrow'),
        }
    };
};

export default useUserRouter;