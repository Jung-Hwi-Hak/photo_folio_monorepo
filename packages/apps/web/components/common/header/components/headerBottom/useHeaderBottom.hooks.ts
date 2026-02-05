import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useModeStore } from '@/apps/web/store/store';

/**
 * * [useHeaderBottomHooks] - 헤더 하단 컴포넌트 Hooks
 * * 헤더 하단 컴포넌트가 사용하는 Hooks
 * */
export const useHeaderBottomHooks = () => {
  // * 프론트엔드 스킬
  const frontSkills: string[] = [
    'React',
    'Next',
    'HTML',
    'JavaScript',
    'JQuery',
    'TanStack-Query',
    'Recoil',
    'Styled-Component',
    'Ajax',
    'Monorepo',
    'Framer-Motion',
  ];
  // * 백엔드 스킬
  const backSkills: string[] = ['Java', 'Spring', 'Oracle', 'PostgresSQL', 'RestFul-API'];

  // 다크 모드 전역변수
  const { darkMode, setMode } = useModeStore();

  // 스크롤 Y축 state
  const [scrollYS, setScrollYS] = useState<number>(0);
  // 헤더 바텀 컴포넌트 hover 상태
  // const [hoverState, setHoverState] = useState<boolean>(false);
  // 헤더 바텀 컴포넌트 click 상태
  const [clickState, setClickState] = useState<boolean>(false);

  // 스크롤 Y축 motion
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latestValue) => {
      setScrollYS(latestValue);
      if (latestValue === 0) setClickState(false);
    });

    return () => unsubscribe();
  }, [scrollY]);

  return {
    clickState,
    setClickState,
    // hoverState,
    // setHoverState,
    scrollYS,
    frontSkills,
    backSkills,
    setMode,
    darkMode,
  };
};
