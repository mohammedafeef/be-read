import styled from "styled-components";

const Root = styled.div`
  border-radius: 8px;
  padding: 5px 8px;
  font-size: 10px;
  color: white;
  background-color: green;
  width: fit-content;
`
const DangerRoot = styled(Root)`
  background-color: rgba(210, 10, 10, .9);
`
const WarningRoot = styled(Root)`
  background-color: rgba(210, 10, 10, .9);
`

interface Props {
    title: string
}

export default function StatusLabel(props: Props) {
    return props.title === "Overdue" ? (
        <DangerRoot>
            {props.title}
        </DangerRoot>
    ) : props.title === "Due soon" ? (
        <WarningRoot>
            {props.title}
        </WarningRoot>
    ) : (
        <Root>
            {props.title}
        </Root>
    )
}