import * as S from "./styles";
import Img from "@atoms/Img";
import {StatusLabel} from "@atoms/index";
import useAdminRouter from "@app/lib/route-manager/admin-routes";

interface Props {
    id: string;
    title: string;
    author: string;
    image: string;
    status?: string;
}

export function BookCard(props: Props) {
    const router = useAdminRouter();
    return (
        <S.Root onClick={() => router.book.details(props.id).navigate()}>
            <S.ImageWrapper>
                <Img src={props.image} alt={props.title}/>
            </S.ImageWrapper>
            {props.status && <StatusLabel title={props.status}/>}
            <S.Title>{props.title}</S.Title>
            <S.Author>{props.author}</S.Author>
        </S.Root>
    )
}