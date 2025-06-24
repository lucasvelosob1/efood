// src/components/RestaurantCard/styles.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TagContainer } from '../Tag/styles'; // Importa o container da Tag

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.primary};
  position: relative;
  color: ${(props) => props.theme.colors.primary};
`;

export const Imagem = styled.img`
  width: 100%;
  height: 217px;
  display: block;
  object-fit: cover;
`;

export const InfosContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    margin-left: 8px;
  }
`;

export const Conteudo = styled.div`
  padding: 8px;
`;

export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const Nota = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;

  img {
    margin-left: 8px;
    width: 21px;
    height: 21px;
  }
`;

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`;

export const BotaoSaibaMais = styled(Link)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;