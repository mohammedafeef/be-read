import * as S from "./styles";
import Layout from "@organisms/admin/Layout";
import {Grid} from "@mui/material";
import {Button, TextInput} from "@atoms/index";

export const AddBookTemplate = () => {
    return (
        <Layout>
            <S.Title>Add Book</S.Title>
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <TextInput label="Book Name" fullWidth/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextInput label="Author" select fullWidth/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextInput label="Publisher" select fullWidth/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextInput label="Genore" select fullWidth/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextInput label="Language" fullWidth/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextInput label="Type" select fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextInput label="Summary" multiline rows={4} fullWidth/>
                </Grid>
            </Grid>
            <S.ActionWrapper>
                <Button>Create</Button>
            </S.ActionWrapper>
        </Layout>
    )
}