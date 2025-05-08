'use client';

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Calendar, Instagram, Youtube, Menu, X } from "lucide-react";
import { useState } from "react";

export default function SlimBodyPrograms() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <div className="relative group">
              <Link href="/about" className="text-gray-800 hover:text-brown-700 font-bold flex items-center">
                SEROUM소개
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    SEROUM의 특별함
                  </Link>
                  <Link href="/doctors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    의료진 소개
                  </Link>
                  <Link href="/equipment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    보유장비 소개
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link href="/iv-center" className="text-gray-800 hover:text-brown-700 font-bold flex items-center">
                수액센터
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/iv-center/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    수액센터 소개
                  </Link>
                  <Link href="/iv-center/programs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    수액 프로그램
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link href="/slimbody" className="text-gray-800 hover:text-brown-700 font-bold flex items-center">
                비만센터
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/slimbody/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    비만센터 소개
                  </Link>
                  <Link href="/slimbody/programs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    비만 프로그램
                  </Link>
                  <Link href="/slimbody/equipment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    장비 소개
                  </Link>
                </div>
              </div>
            </div>
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
                  href="/about"
                  className="text-gray-800 hover:text-brown-700 font-bold py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SEROUM소개
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-brown-700 py-2 pl-4 border-b border-gray-100 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SEROUM의 특별함
                </Link>
                <Link
                  href="/doctors"
                  className="text-gray-600 hover:text-brown-700 py-2 pl-4 border-b border-gray-100 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  의료진 소개
                </Link>
                <Link
                  href="/equipment"
                  className="text-gray-600 hover:text-brown-700 py-2 pl-4 border-b border-gray-100 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  보유장비 소개
                </Link>
                <Link
                  href="/iv-center/about"
                  className="text-gray-800 hover:text-brown-700 font-bold py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  수액센터 소개
                </Link>
                <Link
                  href="/iv-center/programs"
                  className="text-gray-600 hover:text-brown-700 py-2 pl-4 border-b border-gray-100 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  수액 프로그램
                </Link>
                <Link
                  href="/slimbody/about"
                  className="text-gray-800 hover:text-brown-700 font-bold py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  비만센터 소개
                </Link>
                <Link
                  href="/slimbody/programs"
                  className="text-gray-600 hover:text-brown-700 py-2 pl-4 border-b border-gray-100 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  비만 프로그램
                </Link>
                <Link
                  href="/slimbody/equipment"
                  className="text-gray-600 hover:text-brown-700 py-2 pl-4 border-b border-gray-100 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  장비 소개
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
        <section className="relative h-[40vh] bg-brown-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">비만 프로그램</h1>
              <p className="text-lg md:text-xl">
                세로움 SEROUM의 맞춤형 비만 관리 프로그램으로<br />
                건강하고 효과적인 체중 관리를 시작하세요.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">치료 프로그램</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 저주파 치료 */}
              <div className="bg-gray-50 rounded-xl shadow p-6">
                <h3 className="text-xl font-bold mb-3">저주파 치료</h3>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>지방분해 부분비만의 효과적 해소</li>
                  <li>단시간에 격렬히 운동한 효과 (근탄력 유지, 요요현상 감소)</li>
                  <li>통증감소효과(요통, 생리통), 장운동</li>
                </ul>
              </div>
              {/* 리포슬림주사 치료 */}
              <div className="bg-gray-50 rounded-xl shadow p-6">
                <h3 className="text-xl font-bold mb-3">리포슬림주사 치료</h3>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>비타민 B12 첨가, 다이어트에 필요한 영양소 보충, 체지방 감소에 더 큰 효과</li>
                  <li>지방/셀룰라이트 분해 및 부종 감소</li>
                  <li>팔, 등, 복부, 허벅지 등 일부분의 지방 축소에 효과</li>
                </ul>
              </div>
              {/* 전신돔(PDP) 치료 */}
              <div className="bg-gray-50 rounded-xl shadow p-6">
                <h3 className="text-xl font-bold mb-3">전신돔(PDP) 치료</h3>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>생육광선 이용, 힘든 운동없이 누워서 편안한 관리</li>
                  <li>에너지를 순환시키며 땀과 노폐물 배출로 다이어트 효과</li>
                </ul>
              </div>
              {/* 조각주사 치료 */}
              <div className="bg-gray-50 rounded-xl shadow p-6">
                <h3 className="text-xl font-bold mb-3">조각주사 치료</h3>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>콜라겐 합성촉진 및 유해산소 증가 억제</li>
                  <li>원활한 혈액순환 촉진으로 대사률 증가</li>
                  <li>분해 및 체내노폐물 배출 촉진</li>
                </ul>
              </div>
              {/* 카복시 치료 */}
              <div className="bg-gray-50 rounded-xl shadow p-6">
                <h3 className="text-xl font-bold mb-3">카복시 치료</h3>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>셀룰라이트 분해 및 치료(지방 흡입술의 50% 효과)</li>
                  <li>탄력증진 및 사이즈 감소 효과</li>
                  <li>튼살치료에 효과, 산후비만 회복</li>
                </ul>
              </div>
              {/* 수액 치료 */}
              <div className="bg-gray-50 rounded-xl shadow p-6">
                <h3 className="text-xl font-bold mb-3">수액 치료</h3>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>카르틴을 통해 콜라겐 합성 촉진</li>
                  <li>당대사물질 배출로 체지방 분해</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 