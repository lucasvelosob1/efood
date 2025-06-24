import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 120px;

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Container = styled.section`
  padding-top: 56px;
  padding-bottom: 120px;
`;