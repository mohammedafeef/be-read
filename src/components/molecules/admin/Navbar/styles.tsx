import styled from "styled-components";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LowPriorityIcon from '@mui/icons-material/LowPriority';

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
export const BooksListIcon = styled(LowPriorityIcon)`
  font-size: 30px !important;
  color: black;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  
`
export const AccountActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap:10px;
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
`
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
export const BorrowListIcon = styled(LibraryBooksIcon)`
  font-size: 30px !important;
  color: black;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;