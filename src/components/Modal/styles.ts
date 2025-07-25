import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.cores.rosa};
  color: ${(props) => props.theme.cores.branco};
  padding: 32px;
  position: relative;
  z-index: 1;
  display: flex;
  max-width: 1024px;
  width: 90%;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: 24px 16px;
    max-height: 90vh;
    overflow-y: auto; 
`

export const CloseIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  width: 16px;
  height: 16px;
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  display: block;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    height: auto;
    max-height: 250px;
    margin-bottom: 16px;
  }
`

export const InfosContainer = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-left: 0; 
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Portion = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const AddToCartButton = styled.button`
  background-color: ${(props) => props.theme.cores.begeMedio};
  color: ${(props) => props.theme.cores.rosa};
  border: none;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: auto;
  align-self: flex-start;
`