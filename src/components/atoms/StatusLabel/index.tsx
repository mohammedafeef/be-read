import styled from "styled-components";

const Root = styled.div`
  border-radius: 8px;
  padding: 5px 8px;
  font-size: 10px;
  color: white;
  background-color: green;
  width: fit-content;
`

interface Props {
    title: string
}

export default function StatusLabel(props: Props) {
    return (
        <Root>
            {props.title}
        </Root>
    )
}