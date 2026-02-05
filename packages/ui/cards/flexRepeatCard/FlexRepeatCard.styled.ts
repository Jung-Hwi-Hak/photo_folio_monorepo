import styled, { DefaultTheme } from "styled-components";

export const FlexRepeatCardContainer = styled.div`
  position: relative;
  padding-top: 4rem;
  border-top: 1px solid ${({ theme }: DefaultTheme) => theme.colors.gray1};
`;

export const TitleWrap = styled.div`
  color: ${({ theme }: DefaultTheme) => theme.colors.text};
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 30vh;
  min-height: 300px;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.gray500};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  &:hover {
    background-color: ${({ theme }: DefaultTheme) => theme.colors.gray100};
  }

  .card-img-wrap {
    position: relative;
    border-radius: 8px;
    height: 90%;
    width: 73%;
  }

  //@media (max-width: 1200px) {
  //  height: 60vh;
  //}
  //
  //@media (max-width: 959px) {
  //  height: 50vh;
  //  .card-img-wrap {
  //    height: 85%;
  //  }
  //}
`;
