import { motion } from 'framer-motion';
import { useHeaderTopHooks } from '@/apps/web/components/common/header/components/headerTop/useHeaderTop.hooks';
import { useWindowSize } from '@/utils';
import { useEffect, useState } from 'react';

/*
 * * [HeaderTopComponent] - 헤더 상단 컴포넌트
 * * 헤더 상단 컴포넌트이며, 로고 영역
 */
export default function HeaderTopComponent() {
  // 클라이언트 width size 유틸 함수
  const getWindowSize: number = useWindowSize();

  const [windowSizeS, setWindowSizeS] = useState(0);

  useEffect(() => {
    setWindowSizeS(getWindowSize);
  }, [getWindowSize]);

  const {
    parentVariants,
    headerHeight,
    fontSize,
    letterVariants,
    containerVariants,
    logoText2,
    logoText1,
    HandleScrollTop,
  } = useHeaderTopHooks();

  return (
    <motion.div
      className="z-[9999] relative px-[2vw] m-auto flex cursor-pointer select-none  border-b-1 border-gray1  bg-mainBg"
      style={{
        height: windowSizeS >= 960 ? headerHeight : '10vh',
        fontSize: windowSizeS >= 960 ? fontSize : '10vh',
      }} // MotionValue 를 직접 연결
      variants={parentVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onClick={() => HandleScrollTop()}
    >
      {/* 왼쪽 50% 영역 */}
      {/*<S.HeaderHalfDiv variants={containerVariants}>*/}
      <motion.div
        className="flex-1 relative overflow-hidden leading-none"
        variants={containerVariants}
      >
        <>
          {logoText1.split('').map((char: string, index: number) => {
            if (index === 0)
              return (
                <span key={index} className="text-pointText font-bold">
                  {char}
                </span>
              );
            return (
              <motion.span
                key={index}
                className="inline-block items-center font-bold"
                variants={letterVariants}
              >
                {char}
              </motion.span>
            );
          })}
        </>
        <motion.img
          src="/img/mococoHamer.gif"
          className="z-[9999] absolute right-[10%] bottom-0 h-[10vh] object-cover"
        />
      </motion.div>

      {/* 오른쪽 50% 영역 */}
      <motion.div
        className="flex-1 relative overflow-hidden leading-none"
        variants={containerVariants}
      >
        <>
          {logoText2.split('').map((char: string, index: number) => {
            if (index === 0)
              return (
                <span key={index} className="text-pointText font-bold">
                  {char}
                </span>
              );
            return (
              <motion.span
                key={index}
                className="inline-block items-center font-bold"
                variants={letterVariants}
              >
                {char}
              </motion.span>
            );
          })}
        </>
        <motion.img
          src="/img/mococo.gif"
          className="z-[9999] absolute right-[10%] bottom-0 h-[10vh] object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
