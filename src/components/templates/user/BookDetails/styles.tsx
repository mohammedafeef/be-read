import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Root = styled.div`
  display: flex;
`

export const ImageWrapper = styled.div`
  width: 300px;
  height: 450px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 0 0 40px;
`

export const Author = styled.p`
  font-size: 13px;
  color: #808080;
`

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 400;
  color: #000;
`

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  gap: 10px;
`

export const Summary = styled.p`
  font-size: 15px;
  color: #000;
`

export const WishListWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const LikeIcon = styled(FavoriteBorderIcon)`
  font-size: 30px !important;
  color: black;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

export const LikedIcon = styled(FavoriteIcon)`
  font-size: 30px !important;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  color: red;

  :hover {
    transform: scale(1.1);
  }
`;