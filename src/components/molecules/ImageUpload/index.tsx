import React, {ChangeEventHandler, useState} from "react";
import * as S from './styles'

type Props = {
    label: string;
    image?: File | string;
    setImage: (arg0: string, arg1: any) => void;
    error?: boolean;
    hideError?: boolean;
    errorMessage?: string | false;
};

const ImageUpload: React.FC<Props> = (props) => {
    const {
        image,
        label,
        setImage,
        error,
        errorMessage,
        hideError = false,
    } = props;

    const [imageUrl, setImageUrl] = useState<string | undefined>(
        image?.toString()
    );
    const handleImageChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        try{
            const imageFile: File = event.target.files![0];
            setImageUrl(URL.createObjectURL(imageFile));
            setImage(label, imageFile);
        }
        catch(err){
        }
    };

    return (
        <>
                <S.Input
                    type='file'
                    id={label}
                    name={label}
                    hidden
                    onChange={handleImageChange}
                    data-error={error}
                />
                <S.UploadStack>
                    <S.UploadWrapper className={error ? 'error' : 'default'}>
                        {image && <S.Center>
                            <S.CardImage alt={`${label}-input`} src={imageUrl}/>
                        </S.Center>}
                    </S.UploadWrapper>
                    <S.Label htmlFor={label}>
                        Upload Image
                    </S.Label>
                    {!hideError && <S.ErrorMessage>{error && errorMessage}</S.ErrorMessage>}
                </S.UploadStack>
        </>
    )
}

export {ImageUpload}