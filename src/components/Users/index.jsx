import StarMinusIcon from "mdi-react/StarIcon";
import { Link } from "react-router-dom";

import * as S from "./styles";

export default function Users({ user }) {
  return (
    <Link style={{ textDecoration: "none" }} to={`/user/${user.login}`}>
      <S.List data-testid="user-list">
        <S.Avatar src={user.avatar_url} alt={user.login} />
        <S.RepoWrapper>
          <S.Col>
            <S.Title>{user.login}</S.Title>
            <S.Description>{user.bio}</S.Description>
            <S.Tech>{user.email}</S.Tech>
          </S.Col>
          <S.Col>
            <S.StarWrapper>
              <StarMinusIcon />
              <S.Stars>{user.followers}</S.Stars>
            </S.StarWrapper>
          </S.Col>
        </S.RepoWrapper>
      </S.List>
    </Link>
  );
}
