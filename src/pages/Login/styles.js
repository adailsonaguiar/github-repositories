import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  max-width: 43rem;
  height: 45%;
  background-color: #fff;
  > h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }
  > span:nth-child(2) {
    font-size: 1.1rem;
    color: #808080;
    margin-bottom: 70px;
  }
  > span:nth-child(3) {
    margin: 10px 0 20px;
    color: red;
  }
  .login-container {
    background-color: #000;
    width: 70%;
    border-radius: 3px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    .loader-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
    }
    .loader {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      animation: spin 2s linear infinite;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const LoginLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.primary};

    > span:nth-child(2) {
      margin-left: 5px;
    }
  `}
`;
