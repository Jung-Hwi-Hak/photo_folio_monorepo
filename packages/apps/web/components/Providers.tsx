'use client';
import StyledComponentsRegistry from '@/config/styledComponentRegistry';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@theme/theme';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import { useModeStore } from '@/apps/web/store/store';
import HeaderComponent from '@/apps/web/components/common/header/Header.component';

export default function Providers({ children }: { children: React.ReactNode }) {
  const { darkMode } = useModeStore();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={darkTheme}>
        {/*<ResetCSS />*/}
        <AnimatePresence mode="wait">
          <motion.div
            key={darkMode ? 'dark-mode' : 'light-mode'} // key가 바뀌어야 애니메이션이 트리거됩니다
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={'bg-mainBg text-mainText pb-50'}>
              <HeaderComponent />
              <div className="relative w-[95vw] m-auto">{children}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
