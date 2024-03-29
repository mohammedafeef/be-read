import styled from "styled-components";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 3;
  display: flex;
  height: 100px;
  padding: 30px 100px;
  box-shadow: 0 20px 39px rgba(0, 0, 0, 0.03);
  justify-content: space-between;
  align-items: center;
`;
export const AppLogo = styled.img`
  cursor: pointer;
  height: 40px;
  width: 80px;
`;
export const SearchContainer = styled.div`
  display: flex;
  background-color: rgba(5, 5, 5, .05);
  border-radius: 10px;
  
`
export const SearchInput = styled.input`
  outline: none;
  flex: 1;
  padding: 10px 15px;
  border: none;
  font-size: 15px;
  color: black;
  background-color: transparent;

  :focus {
    outline: none;
  }
`
export const SearchButton = styled.button`
  cursor: pointer;
  background-color: #3187ed;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`
export const SearchIcon = styled(SearchOutlinedIcon)`
  color: white;
  font-size: 23px !important;
`
export const AccountActionWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
export const LogoutButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  border: none;
  background-color: rgba(210,10,10,.9);
  border-radius: 12px;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 450px) {
    margin: 0 15px;
    margin-left: 20px;
    padding: 15px 20px;
  }
`;
export const WishListIcon = styled(FavoriteIcon)`
  font-size: 30px !important;
  color: black;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

export const AccountIcon = styled(AccountBoxIcon)`
  font-size: 30px !important;
  color: black;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

export const ActionButton = styled.button`
  cursor: pointer;
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background:none;
  transition: transform 0.1s ease-in-out;
  
  :hover {
    transform: scale(1.01);
  }
`

