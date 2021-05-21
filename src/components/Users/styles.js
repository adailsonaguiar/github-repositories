import styled, { css } from "styled-components";

export const List = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  border-bottom: 0.1rem solid #30363d;
  padding-bottom: 2rem;
  padding-left: 1rem;
`;

export const RepoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 3rem;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.active};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
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
