export interface BookCreationProps {
    name: string;
    author: string;
    summary: string;
    publisher: string;
    genre: string;
    language: string;
    image: string | File;
}