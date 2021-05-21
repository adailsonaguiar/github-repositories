// import StarMinusIcon from "mdi-react/StarIcon";

import * as S from "./styles";

export default function InputSearch({ ...rest }) {
  return (
    <S.Wrapper>
      <input {...rest} />
    </S.Wrapper>
  );
}
