// 1. 공통으로 절대 변하지 않는 값들 (Palettes)
import { useModeStore } from "@/apps/web/store/store";

const palette = {
  white: "#ffffff",
  black: "#000000",
  green100: "#90ee90", // lightgreen
  gray1: "#7575753A",
  gray100: "#818181",
  gray500: "#333333",
  gray900: "#1c1c1c",
};
const fontSize = {
  smallFont: "var(--small-font-size)",
  midFont: "var(--mid-font-size)",
};

const flexCardRepeat = {
  repeat1to4: "var(--flex-card-repeat)",
};

export const lightTheme = {
  colors: {
    text: palette.gray900,
    background: palette.white,
    ...palette,
  },
  fontSize: {
    ...fontSize,
  },
  flexCardRepeat: {
    ...flexCardRepeat,
  },
};

export const darkTheme = {
  colors: {
    text: palette.white,
    background: palette.gray900,
    ...palette,
  },
  fontSize: {
    ...fontSize,
  },
  flexCardRepeat: {
    ...flexCardRepeat,
  },
};

export type ThemeType = typeof lightTheme;
