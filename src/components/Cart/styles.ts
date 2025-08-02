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
  z-index: 10;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${(props) => props.theme.cores.rosa};
  z-index: 1;
  padding: 32px 8px 0 8px;
  width: 360px;
  display: flex;
  flex-direction: column;

  ul {
    flex-grow: 1;
    overflow-y: auto;
  }

  .button-container {
    padding: 24px 0;
  }
`

export const CartItem = styled.li`
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
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.cores.begeMedio};
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