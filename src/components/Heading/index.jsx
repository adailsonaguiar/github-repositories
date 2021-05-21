import styled, { css } from "styled-components";

export const TitleHeading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.gray1};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.weight.medium};
    margin-bottom: 3rem;
    border-left: 0.6rem solid ${theme.colors.active};
    padding-left: 1rem;
  `}
`;

export default function Heading({ children }) {
  return <TitleHeading>{children}</TitleHeading>;
}
