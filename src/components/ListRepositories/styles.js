import styled, { css } from "styled-components";

export const List = styled.div``;
export const RepoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #30363d;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`;
export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.active};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const Col = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    svg {
      color: ${theme.colors.gray1};
    }
  `}
`;

export const Description = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.gray1};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const Tech = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.gray1};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: 1rem;
  `}
`;

export const Stars = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray1};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
`;
