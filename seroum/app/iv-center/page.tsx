'use client';

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Calendar, Instagram, Youtube, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function IVCenter() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const slideImages = [
    "/iv-logo2.png",
    "/iv-img1.png",
    "/iv-logo.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % slideImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="hidden md:block border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center space-x-6 text-xs">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            MY SEKANG
          </Link>
          <div className="h-3 w-px bg-gray-300"></div>
          <Link href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
            <span className="mr-1">GLOBAL</span>
          </Link>
          <div className="h-3 w-px bg-gray-300"></div>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            병원소개
          </Link>
          <div className="h-3 w-px bg-gray-300"></div>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            ABOUT
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={() => window.location.reload()}>
              <Image
                src="/sekang-hospital-logo.png"
                alt="세강병원 SEKANG HOSPITAL"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-brown-700 font-bold">
              SEROUM소개
            </Link>
            <Link href="/iv-center" className="text-gray-800 hover:text-brown-700 font-bold">
              수액센터
            </Link>
            <Link href="#" className="text-gray-800 hover:text-brown-700 font-bold">
              비만센터
            </Link>
            <Link href="#" className="text-gray-800 hover:text-brown-700 font-bold">
              고객후기
            </Link>
            <Link href="#" className="text-gray-800 hover:text-brown-700 font-bold">
              게시판
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-gray-900 hidden md:block">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button
              className="md:hidden text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-800 hover:text-brown-700 font-bold py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SEROUM소개
                </Link>
                <Link
                  href="/iv-center"
                  className="text-gray-800 hover:text-brown-700 font-bold py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  수액센터
                </Link>
                <Link
                  href="#"
                  className="text-gray-800 hover:text-brown-700 font-bold py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  비만센터
                </Link>
                <Link
                  href="#"
                  className="text-gray-800 hover:text-brown-700 font-bold py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  고객후기
                </Link>
                <Link
                  href="#"
                  className="text-gray-800 hover:text-brown-700 font-bold py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  게시판
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          {slideImages.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt={`수액센터 슬라이드${idx+1}`}
              fill
              className={`object-contain transition-opacity duration-1000 ${slide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              priority={idx === 0}
              style={{
                transition: 'opacity 1s',
                objectFit: 'contain',
                objectPosition: 'right center',
                maxWidth: '100%',
                maxHeight: '100%',
                padding: 0
              }}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-10 lg:px-20">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">수액센터</h1>
              <p className="text-white text-lg md:text-xl mb-8">
                개인 맞춤형 수액 처방으로 건강과 아름다움을 위한<br />
                최적의 솔루션을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">프리미엄 수액 프로그램</h2>
              <p className="text-gray-600 leading-relaxed">
                세로움 클리닉은 다양한 수액 프로그램을 통해<br />
                고객님의 건강과 아름다움을 관리합니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/premium-iv-therapy.png"
                  alt="프리미엄 미용 수액 치료"
                  width={800}
                  height={600}
                  className="rounded-lg w-full h-[500px] object-cover shadow-md"
                />
                <p className="text-center text-sm text-gray-500 mt-2">
                  아름다움과 건강을 위한 프리미엄 비타민 수액 테라피
                </p>
              </div>

              <div className="space-y-8">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold mb-3">파워 비타민 - 비타민 파워로 활기 UP!</h3>
                  <p className="text-gray-600 mb-4">
                    비타민C와 비타민B 군, 무기질 등의 함유로 독감 및 코로나19 감염 후 회복, 신체 활력 증강, 에너지 대사
                    촉진, 피로회복, 급성 염증 회복 효과 기대
                  </p>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <span className="text-brown-700 font-bold text-lg">60,000원</span>
                      <span className="ml-2 text-sm text-gray-500">/ 1회 (60분)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brown-700 font-bold text-lg">216,000원</span>
                      <span className="ml-2 text-sm text-gray-500">/ 4회 코스 (1회 60분)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brown-700 font-bold text-lg">288,000원</span>
                      <span className="ml-2 text-sm text-gray-500">/ 6회 코스 (1회 60분)</span>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold mb-3">추가사항</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">백옥</p>
                      <span className="text-brown-700 font-bold">30,000원</span>
                    </div>
                    <div>
                      <p className="text-gray-600">백옥더블</p>
                      <span className="text-brown-700 font-bold">50,000원</span>
                    </div>
                    <div>
                      <p className="text-gray-600">가슴샘</p>
                      <span className="text-brown-700 font-bold">80,000원</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Link
                    href="#"
                    className="inline-block bg-brown-700 text-white px-6 py-3 rounded-md font-medium hover:bg-brown-800 transition-colors"
                  >
                    프로그램 상세보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brown-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">지금 바로 상담 예약하세요</h2>
            <div className="max-w-2xl mx-auto mb-8 opacity-90 space-y-2">
              <p>세로움 SEROUM의 전문 의료진이 1:1 맞춤 상담을 통해</p>
              <p>최적의 수액 프로그램을 제안해 드립니다.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="inline-block bg-white text-brown-700 px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors"
              >
                무료 상담 예약
              </Link>
              <Link
                href="#"
                className="inline-block border border-white text-white px-8 py-4 rounded-md font-bold hover:bg-brown-800 transition-colors"
              >
                프로그램 안내
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/sekang-hospital-logo.png"
                alt="세강병원 SEKANG HOSPITAL"
                width={180}
                height={60}
                className="h-12 w-auto mb-6"
              />
              <p className="text-gray-400 mb-6">
                <span className="font-bold">SEROUM</span> 건강한 아름다움을 위한 프리미엄 수액&비만클리닉
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">클리닉 정보</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    회사 소개
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    의료진 소개
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    오시는 길
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">시술 안내</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/iv-center" className="text-gray-400 hover:text-white">
                    수액센터
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    비만센터
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    영양 상담
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    전후 사진
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">고객 지원</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    자주 묻는 질문
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    예약 문의
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    이용약관
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
            <p>(의)일민의료재단 세강병원 | 대표: 김징균 | 사업자등록번호: 145-82-00143</p>
            <p className="mt-2">주소: 대구 달서구 구마로 220 5층 | 대표전화: 053-620-6175</p>
            <p className="mt-4">© {new Date().getFullYear()} SEKANG HOSPITAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 