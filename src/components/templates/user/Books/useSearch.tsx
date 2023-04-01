import {useMemo, useState} from "react";
import {useQuery} from "react-query";
import {OptionsList} from "@app/types/OptionsList";
import {getAuthors, getBooks, getGenres, getLanguages, getPublishers} from "@app/services/bookService";
import {Option} from "@app/types/Option";
import {Book} from "@app/types/Book";
import useUserRouter from "@app/lib/route-manager/user-routes";

export const useSearch = () => {
    const router = useUserRouter();
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [genre, setGenre] = useState("");
    const [language, setLanguage] = useState("");
    const [keyword, setKeyword] = useState<string>(router.router.query.keyword as string || "");

    const {data} = useQuery({
        queryKey: ['books'],
        async queryFn(): Promise<Book[]> {
            const books = await getBooks();
            const bookList: Book[] = [];
            books.forEach((doc: any) => {
                bookList.push({
                    id: doc.id,
                    ...doc.data()
                } as Book)
            });
            return bookList;
        }
    });

    const books = useMemo(() => {
        return data?.filter((book: Book) => {
            if (author && book.author !== author) {
                return false;
            }
            if (publisher && book.publisher !== publisher) {
                return false;
            }
            if (genre && book.genre !== genre) {
                return false;
            }
            if (language && book.language !== language) {
                return false;
            }
            return !(keyword && !book.name.toLowerCase().includes(keyword.toLowerCase()));

        })
    }, [data, author, publisher, genre, language, keyword]);

    const optionsList = useQuery({
        queryKey: ['options'],
        queryFn: async (): Promise<OptionsList> => {
            const langauges = await getLanguages();
            const genres = await getGenres();
            const publishers = await getPublishers();
            const authors = await getAuthors();
            const options: OptionsList = {
                languages: [],
                genres: [],
                publishers: [],
                authors: []
            }
            langauges.forEach((doc) => {
                options.languages = [...options.languages as Option[], {
                    value: doc.data().value,
                    label: doc.data().value
                } as Option]
            });
            genres.forEach((doc) => {
                options.genres = [...options.genres as Option[], {
                    value: doc.data().value,
                    label: doc.data().value
                } as Option]
            });
            publishers.forEach((doc) => {
                options.publishers = [...options.publishers as Option[], {
                    value: doc.data().value,
                    label: doc.data().value
                } as Option]
            });
            authors.forEach((doc) => {
                options.authors = [...options.authors as Option[], {
                    value: doc.data().value,
                    label: doc.data().value
                } as Option]
            })
            return options;

        },
        onError: (error: any) => console.error("happened man", error)

    });
    const handleAuthorChange = (e: any) => {
        setAuthor(e.target.value);
    }
    const handlePublisherChange = (e: any) => {
        setPublisher(e.target.value);
    }
    const handleGenreChange = (e: any) => {
        setGenre(e.target.value);
    }
    const handleLanguageChange = (e: any) => {
        setLanguage(e.target.value);
    }

    return {
        values: {
            books: books,
            options: optionsList.data,
            states: {
                author,
                publisher,
                genre,
                language,
                keyword
            }
        },

        mutation: {
            handleAuthorChange,
            handlePublisherChange,
            handleGenreChange,
            handleLanguageChange
        }
    }
}