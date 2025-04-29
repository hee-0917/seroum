'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Image from "next/image";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 0.5초 후에 팝업 표시
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-4 relative w-full max-w-lg">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
        
        <div className="relative w-full mx-auto">
          <Image
            src="/event1.png"
            alt="이벤트 이미지"
            width={300}
            height={300}
            className="w-full h-auto object-contain mx-auto"
            priority
          />
          <div className="absolute bottom-4 left-4 cursor-pointer select-none text-gray-700 hover:text-gray-900 text-sm font-medium underline"
            onClick={() => {
              // TODO: 쿠키나 로컬 스토리지를 사용하여 오늘 창 열지 않기 기능 구현
              setIsOpen(false);
            }}
          >
            오늘 창 열지 않기
          </div>
          <div className="absolute bottom-4 right-4 cursor-pointer select-none text-gray-700 hover:text-gray-900 text-sm font-medium underline"
            onClick={() => setIsOpen(false)}
          >
            닫기
          </div>
        </div>
      </div>
    </div>
  );
} 