import {useRouter} from 'next/router';
import {Route} from "@app/lib/Route";

export const LOGIN_URL = '/login';
export const SIGNUP_URL = '/register';
export const HOME_URL = '/user';

const useUserRouter = () => {
    const router = useRouter();
    return {
        router: router,
        login: () => Route.public(router, LOGIN_URL),
        signup: () => Route.public(router, SIGNUP_URL),
        home: () => Route.private(router, HOME_URL),
    };
};

export default useUserRouter;