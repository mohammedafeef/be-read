import * as S from "./styles";
import Layout from "@organisms/admin/Layout";
import {Grid} from "@mui/material";
import {Button, TextInput} from "@atoms/index";
import {ImageUpload} from "@molecules/ImageUpload";

export const AddBookTemplate = () => {
    return (
        <Layout>
            <S.Title>Add Book</S.Title>
            <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                    <ImageUpload label="image"/>
                </Grid>
                <Grid item xs={12} md={8} spacing={2} container mt={3}>
                    <Grid item xs={12}>
                        <TextInput label="Name" fullWidth/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextInput label="Author" select fullWidth/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextInput label="Genre" select fullWidth/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextInput label="Publisher" select fullWidth/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextInput label="Language" fullWidth/>
                    </Grid>
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