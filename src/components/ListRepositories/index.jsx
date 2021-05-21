import StarMinusIcon from "mdi-react/StarIcon";

import * as S from "./styles";

export default function ListRepositories({ repositories }) {
  return (
    <S.List>
      {repositories.map((item, index) => (
        <S.RepoWrapper key={index} data-testid="repository-list">
          <S.Col>
            <S.Title>{item.name}</S.Title>
            <S.Description>{item.description}</S.Description>
            <S.Tech>{item.language}</S.Tech>
          </S.Col>
          <S.Col>
            <S.StarWrapper>
              <StarMinusIcon />
              <S.Stars>{item.stargazers_count}</S.Stars>
            </S.StarWrapper>
          </S.Col>
        </S.RepoWrapper>
      ))}
    </S.List>
  );
}
