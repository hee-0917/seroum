"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingBag, Calendar, Instagram, Youtube, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Popup from "@/components/Popup"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [slide, setSlide] = useState(0)
  const slideImages = [
    "/beautiful-face-hero.png",
    "/iv-img4.png",
    "/iv-img5.png",
    "/iv-logo.png"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % slideImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Popup />
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
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          {slideImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === slide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">세강병원</h1>
            <p className="text-xl md:text-2xl mb-8">건강한 삶을 위한 최선의 선택</p>
            <Link
              href="/about"
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              자세히 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Side Buttons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col">
          <div className="bg-brown-700 text-white p-4 flex flex-col items-center justify-center">
            <Calendar className="h-6 w-6 mb-2" />
            <span className="text-xs writing-mode-vertical transform rotate-0 whitespace-nowrap">RESERVATION</span>
          </div>
          <div className="bg-gray-900 text-white p-4 flex flex-col items-center space-y-6">
            <Link 
              href="https://www.instagram.com/sekanghospital/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link 
              href="https://www.youtube.com/@SEKANG_HOSPITAL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center"
            >
              <Youtube className="h-5 w-5" />
            </Link>
            <Link href="#" className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <span className="text-xs mt-1">챗봇 상담</span>
            </Link>
          </div>
        </div>
      </div>

      <main>
        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">세로움 SEROUM 소개</h2>
              <div className="text-gray-600 leading-relaxed space-y-2">
                <p>세로움 SEROUM은 수액센터와 비만센터를 운영하며 개인별 맞춤 처방으로</p>
                <p>건강과 아름다움을 위한 최적의 솔루션을 제공합니다.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
                <h3 className="text-xl font-bold mb-4">수액센터</h3>
                <p className="text-gray-600">
                  개인 맞춤형 수액 처방으로 영양 공급, 피로 회복, 면역력 증진 등 </p>
                <p>  다양한 건강 솔루션을 제공합니다.</p>
                <Link
                  href="/iv-center"
                  className="inline-block mt-6 text-brown-700 font-medium hover:text-brown-800 transition-colors"
                >
                  자세히 보기 →
                </Link>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
                <h3 className="text-xl font-bold mb-4">비만센터</h3>
                <p className="text-gray-600">
                  체계적인 비만 관리 프로그램과 맞춤형 비만수액으로</p>
                <p>건강한 체중 감량과 체형 관리를 도와드립니다.
                </p>
                <Link
                  href="/slimbody"
                  className="inline-block mt-6 text-brown-700 font-medium hover:text-brown-800 transition-colors"
                >
                  자세히 보기 →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">수액센터 프로그램</h2>
              <p className="text-gray-600 leading-relaxed">
                세로움 SEROUM은 다양한 수액 프로그램을 통해 고객님의 건강과 아름다움을 관리합니다.
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

        {/* Obesity Center Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">비만센터 프로그램</h2>
              <p className="text-gray-600 leading-relaxed">
              세로움 SEROUM의 비만센터는 과학적이고 체계적인 비만 관리 프로그램을 제공합니다.
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
                  <span className="text-brown-700 font-bold text-lg">금액미정정</span>
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
                href="/slimbody"
                className="inline-block bg-brown-700 text-white px-8 py-4 rounded-md font-medium hover:bg-brown-800 transition-colors"
              >
                비만센터 자세히 보기
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">고객 후기</h2>
              <p className="text-gray-600 leading-relaxed">
                세로움 SEROUM을 이용하신 고객님들의 생생한 후기를 확인해보세요.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 빈 후기 카드 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-300">고객명</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-24 bg-gray-100 rounded-md mb-4"></div>
                <p className="text-gray-300">후기 내용이 표시됩니다.</p>
              </div>

              {/* 빈 후기 카드 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-300">고객명</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-24 bg-gray-100 rounded-md mb-4"></div>
                <p className="text-gray-300">후기 내용이 표시됩니다.</p>
              </div>

              {/* 빈 후기 카드 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-300">고객명</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-24 bg-gray-100 rounded-md mb-4"></div>
                <p className="text-gray-300">후기 내용이 표시됩니다.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="#"
                className="inline-block bg-brown-700 text-white px-8 py-4 rounded-md font-medium hover:bg-brown-800 transition-colors"
              >
                더 많은 후기 보기
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
              <p>최적의 수액 & 비만 프로그램을 제안해 드립니다.</p>
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

        {/* Location Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">찾아오시는 길</h2>
              <p className="text-gray-600 leading-relaxed">
              세로움 SEROUM은 편리한 위치에 있으며, 쾌적한 환경에서 최상의 서비스를 제공합니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.4982621168265!2d128.5491390755991!3d35.836784072537554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e4b9375f74dd%3A0x812da86229d8fe37!2z7IS46rCV67OR7JuQ!5e0!3m2!1sko!2skr!4v1745842382289!5m2!1sko!2skr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">주소</h3>
                  <p className="text-gray-600">대구 달서구 구마로 220 5층</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">연락처</h3>
                  <p className="text-gray-600">053-620-6175</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">진료시간</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-600">평일</div>
                    <div className="text-gray-600">9:00 - 18:00</div>
                    <div className="text-gray-600">토요일</div>
                    <div className="text-gray-600">9:00 - 13:00</div>
                    <div className="text-gray-600">일요일/공휴일</div>
                    <div className="text-gray-600">휴진</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">오시는 방법</h3>
                  <p className="text-gray-600">
                    지하철 1호선 서부정류장역 하차 1번 출구로 나와서 본리네거라 방향 도보로 200m거리
                  </p>
                </div>
              </div>
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
                <Link 
                  href="https://www.instagram.com/sekanghospital/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://www.youtube.com/@SEKANG_HOSPITAL" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white"
                >
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
                  <Link href="#" className="text-gray-400 hover:text-white">
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
  )
}
