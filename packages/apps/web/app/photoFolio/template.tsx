// app/template.tsx 또는 특정 폴더/template.tsx
'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // 시작 상태 (약간 아래에서 투명하게)
      animate={{ opacity: 1, y: 0 }} // 도착 상태 (제자리로 오며 선명하게)
      transition={{ ease: 'easeInOut', duration: 0.5 }} // 부드러운 속도 조절
    >
      {children}
    </motion.div>
  );
}
