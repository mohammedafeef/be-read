import * as React from 'react';
import {DateValidationError, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {PickerChangeHandler} from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue";

interface Props {
    label: string;
    fullWidth?: boolean;
    onChange?: PickerChangeHandler<string | null, DateValidationError> | undefined;
    onBlur?: Function;
    helperText?: string;
    error?: boolean;
    value?: string;
}

export default function DateInput(props: Props) {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                slotProps={{
                    textField: {
                        fullWidth: props.fullWidth,
                        helperText: props.helperText,
                        error: props.error,
                        size: 'small',
                    },
                }}
                onChange={props.onChange}
                value={props.value}
            />
        </LocalizationProvider>
    );
}