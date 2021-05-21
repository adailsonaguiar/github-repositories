import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 3rem;

  h1 {
    ${({ theme }) => css`
      color: ${theme.colors.gray1};
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.weight.medium};
      margin-bottom: 3rem;
      border-left: 0.6rem solid ${theme.colors.active};
      padding-left: 1rem;
    `}
  }
`;
