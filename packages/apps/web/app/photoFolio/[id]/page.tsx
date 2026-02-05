'use client';
import { GiCancel } from 'react-icons/gi';
import { usePhotoFolioHooks } from '@/apps/web/app/photoFolio/[id]/usePhotoFolioHooks';
import { useParams } from 'next/navigation';
import Image from 'next/image';

export default function PhotoFolioPage() {
  const { handleBack, scrollRef } = usePhotoFolioHooks();
  const params = useParams();

  const data = {
    1: { title: '1랍니다', imgSrc: 'photofolio_1.png' },
    2: { title: '2랍니다', imgSrc: 'photofolio_1.png' },
    3: { title: '2랍니다', imgSrc: 'photofolio_1.png' },
    4: { title: '2랍니다', imgSrc: 'photofolio_1.png' },
    5: { title: '2랍니다', imgSrc: 'photofolio_1.png' },
    6: { title: '2랍니다', imgSrc: 'photofolio_1.png' },
  };

  return (
    <div ref={scrollRef} className="bg-subBg h-[50vh]">
      <GiCancel onClick={handleBack} className="cursor-pointer absolute right-0" />

      <div className="h-full flex flex-row bg-blue-500">
        {/* 포토폴리오 이미지 wrap */}
        <div className="relative flex-1">
          <Image src={`/img/${data[params?.id].imgSrc}`} alt="포토폴리오" fill />
        </div>
        {/* 포토폴리오 info wrap */}
        <div className="flex-1">
          <ul>
            <li>
              <h3 className="text-lg font-bold">Introduce</h3>
            </li>
            <li className="border-t border-gray1 ">hi</li>
            <li className="border-t border-gray1 ">hi</li>
            <li className="border-t border-gray1 ">hi</li>
            <li className="border-t border-gray1 ">hi</li>
          </ul>
        </div>
      </div>
      <div />
    </div>
  );
}
