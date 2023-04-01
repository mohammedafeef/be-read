import * as S from "./styles";
import Layout from "@organisms/admin/Layout";
import {Grid} from "@mui/material";
import {Button, TextInput} from "@atoms/index";
import DateInput from "@molecules/DateInput";
import {useForm} from "@templates/admin/IssueBook/useForm";
import SelectInput from "@atoms/SelectInput";

export const IssueBookTemplate = () => {
    const {form, state} = useForm();
    return (
        <Layout>
            <S.Title>Issue Book</S.Title>
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <SelectInput name="book" label="Book Name" fullWidth select
                                 options={state.options?.books}
                                 onChange={form.handleChange}
                                 onBlur={form.handleBlur}
                                 value={form.values.book}
                                 error={form.touched.book && Boolean(form.errors.book)}
                                 helperText={form.touched.book && form.errors.book}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectInput name="student" label="Student" select fullWidth
                                 options={state.options?.users}
                                 onChange={form.handleChange}
                                 onBlur={form.handleBlur}
                                 value={form.values.student}
                                 error={form.touched.student && Boolean(form.errors.student)}
                                 helperText={form.touched.student && form.errors.student}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DateInput label="Date of Issuing" fullWidth
                               onChange={(value) => form.setFieldValue("issuedDate", value)}
                               onBlur={form.handleBlur}
                               value={form.values.issuedDate}
                               error={form.touched.issuedDate && Boolean(form.errors.issuedDate)}
                               helperText={(form.touched.issuedDate && form.errors.issuedDate) as string}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DateInput label="Date of return" fullWidth
                               onChange={(value) => form.setFieldValue("returnDate", value)}
                               value={form.values.returnDate}
                               error={form.touched.returnDate && Boolean(form.errors.returnDate)}
                               helperText={(form.touched.returnDate && form.errors.returnDate) as string}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextInput name="remark" label="Remark" multiline rows={4} fullWidth
                               onChange={form.handleChange}
                               onBlur={form.handleBlur}
                               value={form.values.remark}
                               error={form.touched.remark && Boolean(form.errors.remark)}
                               helperText={form.touched.remark && form.errors.remark}
                    />
                </Grid>
            </Grid>
            <S.ActionWrapper>
                <Button onClick={() => form.handleSubmit()}>Issue</Button>
            </S.ActionWrapper>
        </Layout>
    )
}