import styled from "styled-components";

const Root = styled.div`
  border-radius: 6px;
  border: 1px solid #808080;
  padding: 5px;
  font-size: 10px;
  color: #808080;
  height: fit-content;
`

interface Props {
    title: string
}

export default function Tag(props: Props) {
    return (
        <Root>
            {props.title}
        </Root>
    )
}