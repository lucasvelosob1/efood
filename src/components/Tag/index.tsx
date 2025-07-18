import * as S from './styles';

type Props = {
  children: string;
};

const Tag = ({ children }: Props) => <S.TagContainer>{children}</S.TagContainer>;

export default Tag;