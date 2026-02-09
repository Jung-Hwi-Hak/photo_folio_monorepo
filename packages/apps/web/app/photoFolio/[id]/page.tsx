'use client';
import { GiCancel } from 'react-icons/gi';
import { usePhotoFolioHooks } from '@/apps/web/app/photoFolio/[id]/usePhotoFolioHooks';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

export default function PhotoFolioPage() {
  const { handleBack, photoFolioData } = usePhotoFolioHooks();
  const params = useParams();

  // 1. 여기서 딱 한 번만 타입을 확실히 정해줍니다.
  const id = params?.id as string;
  // 2. 이제 'id' 변수는 확실히 string이므로 어디서든 자유롭게 사용 가능합니다.
  const currentItem = photoFolioData[id];
  return (
    <div className="bg-subBg h-[50vh]">
      <GiCancel onClick={handleBack} className="cursor-pointer absolute right-0" />

      <div className="h-full flex flex-row">
        {/* 포토폴리오 이미지 wrap */}
        <div className="relative flex-1 p-5">
          {currentItem ? (
            <Image
              src={`/img/${currentItem.imgSrc}`}
              alt={currentItem.title}
              fill
              className="object-contain"
            />
          ) : (
            <div>데이터가 없습니다.</div>
          )}
        </div>
        {/* 포토폴리오 info wrap */}
        <div className="flex-1 p-5">
          <dl>
            <div className="flex flex-col border-b">
              <dt className="text-pointText flex-1">Introduce</dt>
              <dd className="text-sm font-thin text-gray-400 flex-1">
                Chart.js 라이브러리를 사용하여 차트 포토폴리오
              </dd>
            </div>
            <div className="flex flex-row">
              <dt className="flex-1">Introduce</dt>
              <dd className="text-mainText flex-1">Jung Hwi Hak (KR)</dd>
            </div>
            <div className="flex flex-row">
              <dt className="flex-1">Introduce</dt>
              <dd className="text-mainText flex-1">Jung Hwi Hak (KR)</dd>
            </div>
          </dl>
        </div>
      </div>
      <div />
    </div>
  );
}
