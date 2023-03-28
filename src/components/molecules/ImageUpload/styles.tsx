import styled from "styled-components";

export const Input = styled.input`

`;

export const UploadStack = styled.label`
  flex: 1;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;



export const UploadWrapper = styled.div`
  box-sizing: border-box;
  //position: absolute;
  margin-left: 87px;
  width: 200px;
  height: 300px;
  overflow: hidden;
  margin-top: 32px;
  background: rgba(0,0,0,.1);

  &.default {
    border: 1px solid #B7B7B7;
  }

  &.error {
    outline: 1px solid red;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CardImage = styled.img`
  width: 60px;
  height: 90px;
  object-fit: contain;
  margin-top: 15px;
  filter: drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.5));
`;
export const MarginBottom = styled.div `
  margin-bottom: 20px;
`;

export const Label = styled.label`
  position: relative;
  vertical-align: middle;
  height: 40px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  font-family: 'Noto Sans JP', sans-serif;
  font-style: normal;
  font-weight: 500;
  -webkit-tap-highlight-color: transparent;

  display: flex;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
  border: none;
  background-color: #3187ed;
  border-radius: 12px;
  
`;

export const ErrorMessage = styled.div`
  color: #f44d4d;
  font-family: 'Noto Sans JP',sans-serif;
  font-weight: 500;
  font-size: 12px;
  min-height: 20px;
  text-align: left;
  @media only screen and (max-width: 600px) {
    font-size: 10px;
    height: 18px;
  }
`;