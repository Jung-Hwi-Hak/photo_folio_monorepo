import styled, { DefaultTheme } from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderWrap = styled(motion.header)`
  z-index: 9999;
  position: fixed;
  width: 95vw;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }: DefaultTheme) => theme.colors.text};
`;

// * ==================================================
// * [HeaderTopComponent] - 헤더 상단 컴포넌트 스타일
// * ==================================================

export const HeaderTopContainer = styled(motion.div)`
  z-index: 9999;
  position: relative;
  margin: auto;
  display: flex;
  border-bottom: 1px solid ${({ theme }: DefaultTheme) => theme.colors.gray1};
  cursor: pointer;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.background};
  user-select: none; /* 드래그 선택 방지 */
  -webkit-user-select: none; /* 사파리 호환성 */
`;

export const HeaderHalfDiv = styled(motion.div)`
  flex: 1;
  position: relative;
  line-height: 1;
  overflow: hidden;

  & > span:nth-of-type(1) {
    color: ${({ theme }: DefaultTheme) => theme.colors.green100};
  }
  & > span {
    display: inline-block;
    align-items: center;
    font-weight: 900;
  }
`;

export const Gif = styled(motion.img)`
  z-index: 9999;
  position: absolute;
  bottom: 0;
  right: 10%;
  height: 10vh;
  object-fit: cover;
`;

// * =====================================================
// * [HeaderBottomComponent] - 헤더 하단 컴포넌트 스타일
// * =====================================================
export const HeaderBottomContainer = styled(motion.div)`
  position: absolute;
  z-index: 0;
  width: 100%;
  margin: auto;
  padding: 15px 0;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }: DefaultTheme) => theme.colors.gray1};
`;

// 윈도우 사이즈가 960 이상일 경우
export const WindowATypeWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ATypeItemBox = styled(motion.ul)`
  & .title {
    color: ${({ theme }: DefaultTheme) => theme.colors.green100};
  }

  & li:not(.title) {
    color: ${({ theme }: DefaultTheme) => theme.colors.text};
  }

  & .my_skill {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  & .option ul {
    display: inline-flex;
    flex-direction: column;

    & li {
      display: inline-flex;
      gap: 0.5rem;
      cursor: pointer;

      &:hover {
        color: olivedrab;
      }

      .option_value {
        font-weight: 700;
        color: lightgreen;
      }
    }
  }
`;
