import {TextField, TextFieldProps, MenuItem} from "@mui/material";
import {Option} from "@app/types/Option";

type Props = TextFieldProps & {
    options?: Option[]
}
export default function SelectInput(props: Props) {
    return (
        <TextField
            select
            size="small"
            {...props}
        >
            {
                props.options?.map((option, index) => (
                    <MenuItem key={index} value={option.value}>{option.value}</MenuItem>
                ))
            }

        </TextField>
    )
}