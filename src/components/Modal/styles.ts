import styled from 'styled-components';
import closeIcon from '../../assets/close.svg';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 32px;
  position: relative;
  z-index: 1;
  display: flex;
  gap: 24px;
  max-width: 1024px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`;

export const CloseButton = styled.button`
  background-image: url(${closeIcon});
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

export const AddToCartButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  border: none;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;