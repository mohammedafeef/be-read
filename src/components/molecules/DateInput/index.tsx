import * as React from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {TextField} from "@mui/material";

interface Props {
    label: string;
    fullWidth?: boolean;
}

export default function DateInput(props: Props) {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                slotProps={{
                    textField: {
                        fullWidth: props.fullWidth,
                        size: 'small',
                    },
                }}
                {...props}
            />
        </LocalizationProvider>
    );
}