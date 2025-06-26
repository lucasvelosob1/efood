import styled from 'styled-components';
import trashIcon from '../../assets/trash.svg';

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Sidebar = styled.aside`
  background-color: ${(props) => props.theme.colors.primary};
  z-index: 1;
  padding: 32px 8px;
  width: 360px;
  display: flex;
  flex-direction: column;
`;

export const CartItem = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  gap: 8px;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h4 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 18px;
    font-weight: 900;
  }

  p {
    color: ${(props) => props.theme.colors.primary};
    font-size: 14px;
    margin-top: 16px;
  }
`;

export const RemoveButton = styled.button`
  background-image: url(${trashIcon});
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;

export const TotalPrice = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
  font-size: 14px;
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

export const FormContainer = styled.form`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;

  h4 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 24px;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 34px;
  align-items: flex-end;
`;

export const InputGroup = styled.div`
  flex: 1;
  margin-top: 8px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  height: 32px;
  padding: 0 8px;
  width: 100%;

  &.error {
    border: 2px solid red;
  }
`;

export const ActionButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  border: none;
  width: 100%;
  padding: 4px 0;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  margin-top: 24px;

  ${ActionButton}:first-child {
    margin-bottom: 8px;
  }
`;

export const CheckoutButton = styled(ActionButton)``;