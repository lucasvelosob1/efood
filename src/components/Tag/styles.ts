import styled from 'styled-components';

export const TagContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
`;