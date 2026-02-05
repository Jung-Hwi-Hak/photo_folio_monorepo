import { useState, useEffect } from "react";

// * ======================
// * 클라이언트 width
// * ======================
export const useWindowSize = (): number => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    // 윈도우 크기가 변할 때 실행될 함수
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 초기값 설정을 위해 한 번 실행
    handleResize();

    // 컴포넌트가 언마운트될 때 리스너 제거 (메모리 누수 방지)
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize.width;
};
