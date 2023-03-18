import styled from "styled-components";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 1;
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
export const AccountActionWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoutButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  margin-left: 80px;
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
export const ListIcon = styled(LibraryBooksIcon)`
  font-size: 30px !important;
  color: black;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;