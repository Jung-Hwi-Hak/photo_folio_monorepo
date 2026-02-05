import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export const usePhotoFolioHooks = () => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행
    if (scrollRef.current) {
      // 1. 스크롤 이동
      scrollRef.current.scrollIntoView({
        behavior: 'smooth', // 부드럽게 이동
        block: 'start', // 화면의 어디쯤 위치시킬지 (start, center, end)
      });
    }
  }, []); // 빈 배열: 마운트 시 1회 실행

  const handleBack = () => {
    router.back();
  };

  const data = {
    1: {},
    2: {},
    3: {},
  };

  return {
    scrollRef,
    handleBack,
  };
};
