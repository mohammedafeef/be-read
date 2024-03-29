import '@app/styles/globals.css'
import type {AppProps} from 'next/app'
import {Toaster} from "react-hot-toast";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();
export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Toaster/>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    )
}
