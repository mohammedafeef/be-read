import {ParsedUrlQueryInput} from "querystring";
import {NextRouter} from "next/router";

class Route {
    router: NextRouter;
    isPrivate: boolean;
    path: string;
    query?: ParsedUrlQueryInput;
    options?: object;

    constructor(
        router: NextRouter,
        isPrivate: boolean,
        path: string,
        query?: ParsedUrlQueryInput,
        options?: object
    ) {
        this.router = router;
        this.isPrivate = isPrivate;
        this.path = path;
        this.query = query;
        this.options = options;
    }

    public static private(
        router: NextRouter,
        path: string,
        query?: ParsedUrlQueryInput,
        options?: object
    ): Route {
        return new Route(router, true, path, query, options,);
    }

    public static public(
        router: NextRouter,
        path: string,
        query?: ParsedUrlQueryInput,
        options?: object
    ): Route {
        return new Route(router, false, path, query, options,);
    }

    public async navigate(replace = false) {
        if (this.isPrivate) {
            // TODO: this check might be in server side
            // 1. Check if the request header have JWT token => else login page
            // 2. Check if the JWT is valid => else login page
        }
        // await this.router.push(this.path, this.path, this.query);
        if (replace) {
            await this.router.replace({
                pathname: this.path,
                query: this.query
            }, undefined, this.options)
        } else {
            await this.router.push({
                pathname: this.path,
                query: this.query
            }, undefined, this.options);
        }
    }

    public async navigateAfterDelay(delay = 2000) {
        setTimeout(() => {
            this.navigate();
        }, delay);
    }
}

export {Route}