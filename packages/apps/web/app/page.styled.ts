import styled, { DefaultTheme } from 'styled-components';

export const PageContainer = styled.div`
  background-color: ${({ theme }: DefaultTheme) => theme.colors.gray900};
`;
