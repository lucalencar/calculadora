import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #121212;
    color: #d4d4d4;
`;


export const Botao = styled.button`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
    background: #DDCF9D;
    font-size: 24px;
    border-radius: 4px;
    border: 1px solid rgba(245, 245, 245, 0.7);
    padding: 12px 20px;

    &:hover {
        background: #0096D5;
        cursor: pointer;
    }

    &:active {
        background: #EA6E9A;
    }
`;

export const Input = styled.input`

padding: 10px 15px;
  font-size: 24px;
  background: #f9f9fa;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.7);
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }

`;