'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 3초 후에 팝업 표시
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-brown-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brown-700 mb-4">준비중입니다</h2>
          <p className="text-gray-600 mb-6">
            더 나은 서비스로 곧 찾아뵙겠습니다.<br />
            조금만 기다려주세요.
          </p>
          <div className="space-y-4">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-brown-700 text-brown-700 py-3 rounded-md font-medium hover:bg-brown-50 transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 