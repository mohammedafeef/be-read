import * as S from "./styles";
import Layout from "@organisms/admin/Layout";
import {Grid} from "@mui/material";
import {Button, TextInput} from "@atoms/index";
import {ImageUpload} from "@molecules/ImageUpload";
import {useForm} from "@templates/admin/AddBook/useForm";
import SelectInput from "@atoms/SelectInput";

export const AddBookTemplate = () => {
    const {form, state} = useForm();
    return (
        <Layout>
            <S.Title>Add Book</S.Title>
            <Grid container spacing={5}>
                <Grid item xs={12} md={3}>
                    <ImageUpload image={form.values.image} setImage={form.setFieldValue} label="image"
                                 error={form.touched.image && Boolean(form.errors.image)}
                                 errorMessage={form.touched.image && form.errors.image}/>
                </Grid>
                <Grid item xs={12} md={9} spacing={2} container mt={3}>
                    <Grid item xs={12}>
                        <TextInput label="Name"
                                   name="name"
                                   onChange={form.handleChange}
                                   onBlur={form.handleBlur}
                                   value={form.values.name}
                                   error={form.touched.name && Boolean(form.errors.name)}
                                   helperText={form.touched.image && form.errors.name}
                                   fullWidth/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SelectInput options={state.options?.authors} label="Author"
                                     name="author"
                                     onChange={form.handleChange}
                                     onBlur={form.handleBlur}
                                     value={form.values.author}
                                     error={form.touched.author && Boolean(form.errors.author)}
                                     helperText={form.touched.author && form.errors.author} fullWidth/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SelectInput label="Genre"
                                     name="genre"
                                     options={state.options?.genres} fullWidth
                                     onChange={form.handleChange}
                                     onBlur={form.handleBlur}
                                     value={form.values.genre}
                                     error={form.touched.genre && Boolean(form.errors.genre)}
                                     helperText={form.touched.genre && form.errors.genre}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SelectInput label="Publisher"
                                     name="publisher"
                                     options={state.options?.publishers} fullWidth
                                     onChange={form.handleChange}
                                     onBlur={form.handleBlur}
                                     value={form.values.publisher}
                                     error={form.touched.publisher && Boolean(form.errors.publisher)}
                                     helperText={form.touched.publisher && form.errors.publisher}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SelectInput label="Language"
                                     name="language"
                                     options={state.options?.languages} fullWidth
                                     onChange={form.handleChange}
                                     onBlur={form.handleBlur}
                                     value={form.values.language}
                                     error={form.touched.language && Boolean(form.errors.language)}
                                     helperText={form.touched.language && form.errors.language}/>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <TextInput label="Summary" name="summary" multiline rows={4} fullWidth onChange={form.handleChange}
                               onBlur={form.handleBlur}
                               value={form.values.summary}
                               error={form.touched.summary && Boolean(form.errors.summary)}
                               helperText={form.touched.summary && form.errors.summary}/>
                </Grid>
            </Grid>
            <S.ActionWrapper>
                <Button onClick={() => form.handleSubmit()}>Create</Button>
            </S.ActionWrapper>
        </Layout>
    )
}