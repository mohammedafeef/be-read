import * as S from "./styles";
import Layout from "@organisms/admin/Layout";
import {Grid} from "@mui/material";
import {Button, TextInput} from "@atoms/index";

export const IssueBookTemplate = () => {
    return (
        <Layout>
            <S.Title>Issue Book</S.Title>
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <TextInput label="Book Name" fullWidth select/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextInput label="Student" select fullWidth/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextInput label="Date of Issuing" select fullWidth/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextInput label="Date of return" select fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextInput label="Remark" multiline rows={4} fullWidth/>
                </Grid>
            </Grid>
            <S.ActionWrapper>
                <Button>Issue</Button>
            </S.ActionWrapper>
        </Layout>
    )
}