import Tag from '../Tag'
import * as S from './styles'
import starIcon from '../../assets/star.svg'

type Props = {
  title: string
  category: string
  description: string
  image: string
  infos?: string[]
  rating: number
  id: number
}

const RestaurantCard = ({
  title,
  category,
  description,
  image,
  infos,
  rating,
  id
}: Props) => {
  const getDescricao = (text: string) => {
    if (text.length > 250) {
      return text.slice(0, 247) + '...'
    }
    return text
  }

  return (
    <S.Card>
      <S.Imagem src={image} alt={title} />
      <S.InfosContainer>
        {infos && infos.map((info) => <Tag key={info}>{info}</Tag>)}
        <Tag>{category}</Tag>
      </S.InfosContainer>
      <S.Conteudo>
        <S.HeaderCard>
          <S.Titulo>{title}</S.Titulo>
          <S.Nota>
            <span>{rating}</span>
            <img src={starIcon} alt="Estrela" />
          </S.Nota>
        </S.HeaderCard>
        <S.Descricao>{getDescricao(description)}</S.Descricao>
        <S.BotaoSaibaMais to={`/profile/${id}`}>Saiba mais</S.BotaoSaibaMais>
      </S.Conteudo>
    </S.Card>
  )
}

export default RestaurantCard