import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import * as S from "./styles";

export default function MenuBar() {
  const { state } = useContext(AuthContext);
  return (
    <S.Wrapper>
      <S.UserInformation>
        <S.Avatar src={state?.user?.avatar_url} alt={state?.user?.name} />
        <S.UserName>{state?.user?.name}</S.UserName>
        <S.Bio>{state?.user?.bio}</S.Bio>
      </S.UserInformation>
      <S.Pages>
        <S.PageItem active={window.location.pathname === "/"}>
          <Link to="/">Home</Link>
        </S.PageItem>
        <S.PageItem
          active={window.location.pathname === `/user/${state?.user?.login}`}
        >
          <Link to={`/user/${state?.user?.login}`}>My Repositories</Link>
        </S.PageItem>
      </S.Pages>
    </S.Wrapper>
  );
}
