'use client';
import FlexRepeatCard from '@/ui/cards/flexRepeatCard/FlexRepeatCard.index';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

type PortfolioDataType = {
  id: number;
  title: string;
  imgSrc: string;
}[];

export default function BodyComponent() {
  const router = useRouter();
  const portfolioData: PortfolioDataType = [
    { id: 1, title: 'Chart Project 1', imgSrc: 'photofolio_1.png' },
    { id: 2, title: 'Chart Project 2', imgSrc: 'photofolio_1.png' },
    { id: 3, title: 'Chart Project 3', imgSrc: 'photofolio_1.png' },
    { id: 4, title: 'Chart Project 4', imgSrc: 'photofolio_1.png' },
    { id: 5, title: 'Chart Project 5', imgSrc: 'photofolio_1.png' },
    { id: 6, title: 'Chart Project 6', imgSrc: 'photofolio_1.png' },
  ];
  const handleClick = ({ id }: { id: number }) => {
    router.push(`/photoFolio/${id}`);
  };
  return (
    <motion.div
      className="grid grid-cols-card1to4 gap-15"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        layout: { duration: 0.5, type: 'spring', stiffness: 200, damping: 25 },
      }}
    >
      <>
        {portfolioData.map((item) => (
          // UI 공통 컴포넌트 카드
          <FlexRepeatCard
            key={item.id}
            title={item.title}
            id={item.id}
            imgSrc={item.imgSrc}
            clickFnc={() => handleClick({ id: item.id })}
          />
        ))}
      </>
    </motion.div>
  );
}
