import {TextField, TextFieldProps} from "@mui/material";

type Props = TextFieldProps;
export default function TextInput(props: Props) {
    return (
        <TextField
            size="small"
            {...props}
        />
    )
}