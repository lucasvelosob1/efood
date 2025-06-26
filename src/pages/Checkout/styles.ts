import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  padding: 40px 0;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  font-weight: bold;

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;