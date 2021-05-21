import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    width: 40rem;
    height: 100vh;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 0 1rem;
  `}
`;

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 18rem;
  border-radius: 50%;
  margin-top: 3rem;
`;

export const UserName = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    margin-top: 3rem;
    font-weight: ${theme.font.weight.medium};
  `}
`;

export const Bio = styled.small`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin-top: 1rem;
    font-weight: ${theme.font.weight.regular};
    text-align: center;
  `}
`;

export const Pages = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin-top: 5rem;
  `}
`;

export const PageItem = styled.li`
  ${({ theme, active }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.regular};
    cursor: pointer;
    border-radius: 0.4rem;
    background-color: ${active ? theme.colors.secondary : ""};
    margin-top: 1rem;

    &:hover {
      background-color: ${theme.colors.active};
    }

    a {
      padding: 2rem;
      display: block;
      text-decoration: none;
      color: ${theme.colors.white};
    }
  `}
`;
