'use client';

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Calendar, Instagram, Youtube, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function SlimBody() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = ['/slimbody1.png', '/slimbody2.png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // 5초마다 이미지 전환

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
            <Link
              href="/"
              className="flex items-center"
              onClick={e => {
                e.preventDefault();
                window.location.replace("/");
              }}
            >
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
            <Link href="/slimbody" className="text-gray-800 hover:text-brown-700 font-bold">
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
                  href="/slimbody"
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
        <section className="relative h-[60vh] flex items-stretch">
          <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
          <div className="flex-1 relative">
            {slideImages.map((src, idx) => (
              <Image
                key={src}
                src={src}
                alt="비만센터"
                fill
                sizes="100vw"
                quality={100}
                priority={idx === 0}
                className={`object-contain transition-opacity duration-1000 ${currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left',
                  transform: 'scale(1)'
                }}
              />
            ))}
          </div>
          <div className="flex-1 flex flex-col justify-center items-end px-4 md:px-10 lg:px-20 z-20">
            <div className="max-w-xl text-right">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">비만센터</h1>
              <p className="text-white text-lg md:text-xl mb-8">
                체계적인 비만 관리 프로그램과 맞춤형 비만수액으로<br />
                건강한 체중 감량과 체형 관리를 도와드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">비만센터 프로그램</h2>
              <p className="text-gray-600 leading-relaxed">
                세로움 클리닉의 비만센터는 과학적이고 체계적인<br />
                비만 관리 프로그램을 제공합니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-brown-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">다이어트약 처방 1:1 맞춤 처방</h3>
                <p className="text-gray-600 mb-6">
                  항정약제 비사용으로 장기간 복용시에도 안전하고 건강하게 요요현상 감소. 목적에 맞는 회식약, 야식약,
                  디저트약, 취침약 처방 가능합니다.
                </p>
                <div className="flex items-center">
                  <span className="text-brown-700 font-bold text-lg">금액미정</span>
                  <span className="ml-2 text-sm text-gray-500">/ 1회 상담</span>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-brown-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">다이어트 수액</h3>
                <p className="text-gray-600 mb-6">
                  체중 감량과 대사 촉진을 위한 특화된 비만수액 프로그램을 제공합니다.
                </p>
                <div className="flex items-center">
                  <span className="text-brown-700 font-bold text-lg">금액미정</span>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-brown-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">위고비 도입</h3>
                <p className="text-gray-600 mb-6">
                  부작용관리, 혈당모니터링, 체성분검사, 의사진료면담 등 추후 관리까지도 가능합니다.
                </p>
                <div className="flex items-center">
                  <span className="text-brown-700 font-bold text-lg">금액미정</span>
                  <span className="ml-2 text-sm text-gray-500">/ 1회</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="#"
                className="inline-block bg-brown-700 text-white px-8 py-4 rounded-md font-medium hover:bg-brown-800 transition-colors"
              >
                비만센터 자세히 보기
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brown-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">지금 바로 상담 예약하세요</h2>
            <div className="max-w-2xl mx-auto mb-8 opacity-90 space-y-2">
              <p>세로움 SEROUM의 전문 의료진이 1:1 맞춤 상담을 통해</p>
              <p>최적의 비만 관리 프로그램을 제안해 드립니다.</p>
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
                  <Link href="/slimbody" className="text-gray-400 hover:text-white">
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