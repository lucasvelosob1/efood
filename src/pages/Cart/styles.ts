import styled from 'styled-components'
import trashIcon from '../../assets/trash.svg'

export const Container = styled.div`
  padding: 80px 0;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
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
  color: ${(props) => props.theme.cores.branco};
  background-color: ${(props) => props.theme.cores.rosa};
  padding: 16px;
  font-weight: bold;
  font-size: 14px;
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
`
export const ActionButton = styled.button`
  background-color: ${(props) => props.theme.cores.rosa};
  color: ${(props) => props.theme.cores.begeMedio};
  border: none;
  width: 100%;
  padding: 8px 0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  max-width: 250px;
  float: right; 
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
  }
`