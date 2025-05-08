'use client';

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Calendar, Instagram, Youtube, Menu, X } from "lucide-react";
import { useState } from "react";

export default function IVCenterAbout() {
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
            <Link href="/" className="text-gray-800 hover:text-brown-700 font-bold">
              SEROUM소개
            </Link>
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
                  href="/iv-center/about"
                  className="text-gray-800 hover:text-brown-700 font-bold py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  수액센터 소개
                </Link>
                <Link
                  href="/iv-center/programs"
                  className="text-gray-800 hover:text-brown-700 font-bold py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  수액 프로그램
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
        <section className="relative h-[40vh] bg-brown-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">수액센터 소개</h1>
              <p className="text-lg md:text-xl">
                개인 맞춤형 수액 처방으로 건강과 아름다움을 위한<br />
                최적의 솔루션을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                <h2>세로움 수액센터의 특별함</h2>
                <p>
                  세로움 수액센터는 최신 의료 장비와 전문 의료진을 통해 고객님의 건강과 아름다움을 위한
                  최적의 수액 치료를 제공합니다. 개인별 맞춤 처방으로 영양 공급, 피로 회복, 면역력 증진 등
                  다양한 건강 솔루션을 제공합니다.
                </p>

                <h3>전문 의료진</h3>
                <p>
                  풍부한 임상 경험을 바탕으로 고객님의 상태에 맞는 최적의 수액 처방을 제안해 드립니다.
                  전문 의료진의 철저한 상담과 처방으로 안전하고 효과적인 치료를 보장합니다.
                </p>

                <h3>안전한 시설</h3>
                <p>
                  무균 처치실과 최신 의료 장비를 갖춘 안전하고 쾌적한 환경을 제공합니다.
                  모든 시술은 전문 의료진의 감독 하에 진행되며, 안전한 의료용품만을 사용합니다.
                </p>

                <h3>맞춤형 프로그램</h3>
                <p>
                  고객님의 건강 상태와 목적에 맞는 맞춤형 수액 프로그램을 제공합니다.
                  영양 공급, 피로 회복, 면역력 증진 등 다양한 목적에 맞는 프로그램을 선택하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
