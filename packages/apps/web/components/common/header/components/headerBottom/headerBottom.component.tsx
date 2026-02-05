import { useHeaderBottomHooks } from '@/apps/web/components/common/header/components/headerBottom/useHeaderBottom.hooks';
import { motion } from 'framer-motion';
import React from 'react';
/*
 * * [HeaderBottomComponent] - 헤더 하단 컴포넌트
 * * 헤더 하단 컴포넌트이며, 소개 및 몇 가지 기능이 있음
 */
export default function HeaderBottomComponent() {
  const { scrollYS, backSkills, frontSkills, setMode, darkMode, setClickState, clickState } =
    useHeaderBottomHooks();

  const isVisibleToClick = clickState || (scrollYS !== undefined && scrollYS === 0);
  return (
    <motion.div
      className="absolute z-0 w-[100vw]  px-[2vw] py-[5] border-b border-gray1 bgBlur cursor-pointer"
      animate={{
        y: isVisibleToClick ? '0%' : '-80%',
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      onClick={() =>
        setClickState((prevState) => {
          if (scrollYS !== undefined && scrollYS === 0) return false;
          return !prevState;
        })
      }
    >
      <motion.dl
        className="flex flex-col flex-wrap gap-5" // 간격을 조금 더 넓혔어요
        animate={{ opacity: isVisibleToClick ? 1 : 0 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        {/* Introduce 섹션 */}
        <div className="flex flex-col">
          <dt className="text-lg font-bold text-pointText">Introduce</dt>
          <dd className="text-mainText">Jung Hwi Hak (KR)</dd>
          <dd className="text-mainText">1995.11.20 / Man</dd>
        </div>

        {/* Front-End 섹션 */}
        <div className="flex flex-col gap-1">
          <dt className="text-lg font-bold text-pointText">Front-End</dt>
          <dd className="flex flex-wrap gap-x-1 text-mainText">
            {frontSkills.map((skill, index) => (
              <span key={skill}>
                {skill}
                {index !== frontSkills.length - 1 ? ',' : ''}
              </span>
            ))}
          </dd>
        </div>

        {/* Back-End 섹션 */}
        <div className="flex flex-col gap-1">
          <dt className="text-lg font-bold text-pointText">Back-End</dt>
          <dd className="flex flex-wrap gap-x-1 text-mainText">
            {backSkills.map((skill, index) => (
              <span key={skill}>
                {skill}
                {index !== backSkills.length - 1 ? ',' : ''}
              </span>
            ))}
          </dd>
        </div>

        {/* Option 섹션 */}
        <div className="flex flex-col gap-1">
          <dt className="text-lg font-bold text-pointText">Option</dt>
          <dd>
            <button
              disabled={!isVisibleToClick}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setMode();
              }}
              className="inline-flex gap-2 cursor-pointer hover:text-[olivedrab] text-mainText transition-colors"
            >
              <span>Dark mode</span>
              <span>( {darkMode ? 'Y' : 'N'} )</span>
            </button>
          </dd>
        </div>
      </motion.dl>
    </motion.div>
  );
}
