'use client';

import HeaderTopComponent from '@/apps/web/components/common/header/components/headerTop/headerTop.component';
import HeaderBottomComponent from '@/apps/web/components/common/header/components/headerBottom/headerBottom.component';
import { motion } from 'framer-motion';
/**
 * * [HeaderComponent] - 헤더 컴포넌트
 * * 헤더 최상위 컴포넌트이며 TOP, BOTTOM 자식 컴포넌트를 가지고 있음
 * */

export default function HeaderComponent() {
  return (
    <>
      <motion.header className="fixed z-[9999] w-[100vw] top-0">
        <HeaderTopComponent />
        <HeaderBottomComponent />
      </motion.header>
      <div style={{ height: '70vh' }} />
    </>
  );
}
