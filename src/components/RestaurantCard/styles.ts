import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Card = styled.div`
  background-color: ${(props) => props.theme.cores.branco};
  border: 1px solid ${(props) => props.theme.cores.rosa};
  position: relative;
  color: ${(props) => props.theme.cores.rosa};
`

export const Imagem = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`

export const InfosContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Conteudo = styled.div`
  padding: 8px;
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Nota = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;

  img {
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const BotaoSaibaMais = styled(Link)`
  background-color: ${(props) => props.theme.cores.rosa};
  color: ${(props) => props.theme.cores.begeMedio};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
`