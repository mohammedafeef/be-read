import {useRouter} from 'next/router';
import {Route} from "@app/lib/Route";

export const LOGIN_URL = '/admin/login';
export const HOME_URL = '/admin/book';

const useAdminRouter = () => {
    const router = useRouter();
    return {
        router: router,
        login: () => Route.public(router, LOGIN_URL),
        home: () => Route.private(router, HOME_URL),
    };
};

export default useAdminRouter;