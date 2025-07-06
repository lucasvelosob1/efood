import styled from 'styled-components'
import trashIcon from '../../assets/trash.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 10; // Garantindo que fique acima de tudo

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${(props) => props.theme.cores.rosa};
  z-index: 1;
  padding: 32px 8px;
  width: 360px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.cores.begeMedio}; // Cor padrão do texto
`

export const CartItem = styled.div`
  background-color: ${(props) => props.theme.cores.begeMedio};
  display: flex;
  gap: 8px;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;
  color: ${(props) => props.theme.cores.rosa};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    margin-top: 16px;
  }
`

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
`

export const TotalPrice = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`

export const FormContainer = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;

  h4 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 34px;
  align-items: flex-start;
`

export const InputGroup = styled.div`
  flex: 1;
  margin-top: 16px;
`

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`

export const Input = styled.input`
  background-color: ${(props) => props.theme.cores.begeMedio};
  border: none;
  height: 32px;
  padding: 0 8px;
  width: 100%;
  color: #4b4b4b;
  font-weight: bold;

  &.error {
    border: 2px solid red;
  }
`

export const ButtonGroup = styled.div`
  margin-top: 24px;
`

export const ActionButton = styled.button`
  background-color: ${(props) => props.theme.cores.begeMedio};
  color: ${(props) => props.theme.cores.rosa};
  border: none;
  width: 100%;
  padding: 4px 0;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:first-child {
    margin-bottom: 8px;
  }
`
export const ErrorText = styled.p`
  color: #fff;
  background-color: #c0392b;
  padding: 4px;
  border-radius: 4px;
  font-size: 12px;
  margin-top: 4px !important; // !important para sobrepor a margem geral do <p>
  margin-bottom: 0 !important;
  text-align: center;
`