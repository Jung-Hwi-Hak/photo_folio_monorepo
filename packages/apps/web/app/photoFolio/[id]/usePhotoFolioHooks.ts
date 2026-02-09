import { useRouter } from 'next/navigation';

interface PhotoItem {
  title: string;
  imgSrc: string;
}

export const usePhotoFolioHooks = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const photoFolioData: Record<string, PhotoItem> = {
    '1': { title: '1랍니다', imgSrc: 'photofolio_1.png' },
    '2': { title: '2랍니다', imgSrc: 'photofolio_1.png' },
    '3': { title: '2랍니다', imgSrc: 'photofolio_1.png' },
    '4': { title: '2랍니다', imgSrc: 'photofolio_1.png' },
    '5': { title: '2랍니다', imgSrc: 'photofolio_1.png' },
    '6': { title: '2랍니다', imgSrc: 'photofolio_1.png' },
  };
  return {
    handleBack,
    photoFolioData,
  };
};
