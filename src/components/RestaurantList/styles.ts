import styled from 'styled-components';

export const ListContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 80px auto;
  padding: 0 16px;
`;

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
