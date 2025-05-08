'use client';

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Calendar, Instagram, Youtube, Menu, X } from "lucide-react";
import { useState } from "react";

export default function SlimBodyEquipment() {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">장비 소개</h1>
              <p className="text-lg md:text-xl">
                세로움 SEROUM은 최신 의료 장비를 통해<br />
                정확하고 효과적인 비만 관리를 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12">
              {/* Equipment 1 */}
              <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                <div className="relative w-full md:w-1/2 h-64 min-w-[200px]">
                  <Image
                    src="/biophoton.png"
                    alt="바이오 포톤 PDP 전신돔"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">바이오 포톤(Bio photon) PDP 전신돔</h3>
                  <div className="text-gray-600 space-y-2">
                    <p>강력한 생육광선 열에너지를 인체 전신에 깊숙하게 전달(복사)시키는 1도씨의 새로운 개념의 전신 사우나돔입니다.</p>
                    <p>상승된 체온을 오랫동안 유지시켜 백혈구의 일종인 림프구 기능과 면역력을 높여 줍니다. 체지방 분해 및 스트레스를 경감시키고 신진대사 증진 및 지방과 노폐물을 빠르게 분해, 분출시켜 줍니다.</p>
                    <p>혈전과 혈류개선 및 세포의 재생 및 활성화를 시켜주고 젖산을 빠르게 감소시켜 피로회복 효과를 증진시킵니다.</p>
                  </div>
                </div>
              </div>

              {/* Equipment 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                <div className="relative w-full md:w-1/2 h-64 min-w-[200px]">
                  <Image
                    src="/ssondarsmaster.png"
                    alt="저주파 SSondar Smaster"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">저주파 SSondar Smaster</h3>
                  <div className="text-gray-600 space-y-2">
                    <p>저주파 비만 치료기는 살을 빼고자 하는 부위에 저주파를 흘려보내 지방 세포를 자극하고 지방세포 크기를 줄이는 부분비만 관리법입니다.</p>
                    <p>지방 세포 크기 감소, 피부 탄력 증진, 근육이완, 혈액, 림프액 순환 촉진, 신진대사 활성화에 효과적입니다.</p>
                  </div>
                </div>
              </div>

              {/* Equipment 3 */}
              <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                <div className="relative w-full md:w-1/2 h-64 min-w-[200px]">
                  <Image
                    src="/ssondarmeso2.png"
                    alt="메조건 SSondar Meso2"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">메조건 SSondar Meso2</h3>
                  <div className="text-gray-600 space-y-2">
                    <p>비만관리를 위한 정확한 약물주입과 통증이 거의 없는 메조건입니다.</p>
                    <p>약물손실 최소화 시스템을 도입, 피부에 직접 닿지 않아 피부의 자극을 줄이고 환자의 피부 두께에 따라 시술하도록 설계되었습니다.</p>
                  </div>
                </div>
              </div>

              {/* Equipment 4 */}
              <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                <div className="relative w-full md:w-1/2 h-64 min-w-[200px]">
                  <Image
                    src="/carbo.png"
                    alt="카복시(기복기) SSondar Carbo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">카복시(기복기) SSondar Carbo</h3>
                  <div className="text-gray-600 space-y-2">
                    <p>인체에 무해한 의료용 이산화탄소를 피하지방층에 주입하여 직접적인 지방분해 효과가 있으며, 주변의 혈관이나 림프관의 확장으로 인해 산소의 공급이 원활해지고 지방 흡수력이 높아지며, 국소지방의 운반기능이 향상되어 부분비만 해소에 효과적입니다.</p>
                    <p>더불어 피부탄력을 유지함과 동시에 튼살과 흉터, 셀룰라이트 개선에 효과적입니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 