import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 3rem;
`;

export const Tab = styled.div`
  ${({ theme }) => css`
    border-bottom: 0.1rem solid ${theme.colors.active};
    margin-bottom: 3rem;
    display: flex;
  `}
`;

export const TabItem = styled.a`
  ${({ theme, active }) => css`
    padding: 1.6rem 1rem;
    background: ${!!active ? theme.colors.active : ""};
    display: flex;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weight.bold};
    cursor: pointer;
  `}
`;
