import styled from 'styled-components'
import { Form as FormikForm } from 'formik'
import trashIcon from '../../assets/trash.svg'

export const Container = styled.div`
  padding: 80px 0;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  color: ${(props) => props.theme.cores.rosa};
`

export const List = styled.ul`
  list-style: none;
`

export const CartItem = styled.li`
  background-color: ${(props) => props.theme.cores.begeMedio};
  color: ${(props) => props.theme.cores.rosa};
  display: flex;
  gap: 24px;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }
`

export const RemoveButton = styled.button`
  background-image: url(${trashIcon});
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const TotalPrice = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  margin-top: 24px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
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
`

export const EmptyCart = styled.div`
  text-align: center;
  padding: 40px;
  border: 2px dashed ${(props) => props.theme.cores.rosa};
  border-radius: 8px;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 24px;
    line-height: 22px;
  }
`

export const StyledForm = styled(FormikForm)`
  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 34px;
`

export const InputGroup = styled.div`
  flex: 1;
  margin-bottom: 8px;

  label {
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
    color: ${(props) => props.theme.cores.begeMedio};
  }

  input {
    background-color: ${(props) => props.theme.cores.begeMedio};
    border: 1px solid ${(props) => props.theme.cores.begeMedio};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    color: #000;

    &.error {
      border: 2px solid red;
    }
  }
`

export const ButtonGroup = styled.div`
  margin-top: 16px;
  
  button {
    margin-bottom: 8px;
  }
`

export const ErrorMsg = styled.p`
  font-size: 12px;
  color: red;
  margin-top: 4px;
`