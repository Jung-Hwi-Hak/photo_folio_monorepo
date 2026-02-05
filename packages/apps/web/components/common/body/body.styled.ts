import styled, { DefaultTheme } from 'styled-components';

export const PortoFolioWrap = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }: DefaultTheme) => theme.flexCardRepeat.repeat1to4};
  row-gap: 5rem;
  column-gap: 1.5rem;
  color: olivedrab;
`;
