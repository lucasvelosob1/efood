import styled from 'styled-components'

export const ListContainer = styled.section`
  padding: 56px 0 120px;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      grid-template-columns: 1fr 1fr;
      gap: 32px 16px;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }
  }
`