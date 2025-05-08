'use client';

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Calendar, Instagram, Youtube, Menu, X } from "lucide-react";
import { useState } from "react";

export default function IVCenterPrograms() {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">수액 프로그램</h1>
              <p className="text-lg md:text-xl">
                세로움 SEROUM은 다양한 수액 프로그램을 통해<br />
                고객님의 건강과 아름다움을 관리합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="#"
                  className="inline-block bg-brown-700 text-white px-8 py-4 rounded-md font-medium hover:bg-brown-800 transition-colors"
                >
                  상담 예약하기
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 