import {useRouter} from 'next/router';
import {Route} from "@app/lib/Route";

export const LOGIN_URL = '/admin/login';
export const HOME_URL = '/admin/book';
export const BORROW_URL = '/admin/borrow';


const useAdminRouter = () => {
    const router = useRouter();
    return {
        router: router,
        login: () => Route.public(router, LOGIN_URL),
        home: () => Route.private(router, HOME_URL),
        book: {
            details: (id: string) => Route.private(router, `/admin/book/${id}`),
            create: () => Route.private(router, `/admin/book/create`),
            issueBook: () => Route.private(router, `/admin/book/issue`),
        },
        borrow: {
            list: () => Route.private(router, BORROW_URL),
        }
    };
};

export default useAdminRouter;