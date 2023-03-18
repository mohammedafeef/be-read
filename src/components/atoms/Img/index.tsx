import React, {HTMLAttributes} from "react";
import styled from "styled-components";

type Props = HTMLAttributes<HTMLImageElement> & {
    src?: string;
};

const Component = styled.img`
  width: 100%;
`;

const Img: React.FC<Props> = (props: Props) => {
    return (
        <Component {...props}/>
    )
};

export default Img;