import { useScroll, useTransform, Variants } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

/**
 * [useHeaderTopHooks] - 헤더 컴포넌트 훅
 * * 헤더 상단 컴포넌트에 사용하는 Hooks
 * */
export const useHeaderTopHooks = () => {
  const pathName = usePathname();
  const router = useRouter();

  // * 로고 텍스트
  const logoText1: string = 'PHOTO';
  const logoText2: string = 'FOLIO';

  // * 스크롤 Y축
  const { scrollY } = useScroll();

  // * scrollY 값에 따른 헤더 높이
  const headerHeight = useTransform(scrollY, [0, 100], ['27vh', '10vh']);

  // * scrollY 값에 따른 글자 크기
  // const fontSize = useTransform(scrollY, [0, 100], ['17vh', '6vh']);
  const fontSize = useTransform(scrollY, [0, 100], ['24vh', '10vh']);

  // * 자식 태그들의 animation 효과를 각각 텀을 주기 위한 motion option 세팅
  const parentVariants = {
    animate: {
      transition: { staggerChildren: 0 },
    },
  };
  const containerVariants: Variants = {
    initial: {},
    hover: {
      transition: {
        staggerChildren: 0.05, // * 텀 시간
      },
    },
  };

  // * 로고 텍스트 animation 옵션
  const letterVariants: Variants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
    },
  };

  const HandleScrollTop = () => {
    console.log(pathName);
    if (pathName !== '/') router.push('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return {
    headerHeight,
    fontSize,
    containerVariants,
    letterVariants,
    logoText1,
    logoText2,
    parentVariants,
    HandleScrollTop,
  };
};
