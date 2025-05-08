'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  Settings, 
  LogOut,
  FileText,
  Image as ImageIcon,
  Menu,
  X
} from 'lucide-react';

export default function AdminDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // TODO: 실제 로그아웃 로직 구현
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg hidden md:block">
        <div className="p-6">
          <Image
            src="/sekang-hospital-logo.png"
            alt="세강병원 SEKANG HOSPITAL"
            width={180}
            height={60}
            className="mb-8"
          />
          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 hover:bg-gray-100 p-3 rounded-lg">
              <Users className="w-5 h-5" />
              <span>회원 관리</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 hover:bg-gray-100 p-3 rounded-lg">
              <Calendar className="w-5 h-5" />
              <span>예약 관리</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 hover:bg-gray-100 p-3 rounded-lg">
              <MessageSquare className="w-5 h-5" />
              <span>문의 관리</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 hover:bg-gray-100 p-3 rounded-lg">
              <FileText className="w-5 h-5" />
              <span>게시판 관리</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 hover:bg-gray-100 p-3 rounded-lg">
              <ImageIcon className="w-5 h-5" />
              <span>이미지 관리</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 hover:bg-gray-100 p-3 rounded-lg">
              <Settings className="w-5 h-5" />
              <span>설정</span>
            </a>
          </nav>
        </div>
        <div className="absolute bottom-0 w-full p-6">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 w-full p-3 rounded-lg hover:bg-gray-100"
          >
            <LogOut className="w-5 h-5" />
            <span>로그아웃</span>
          </button>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-700 hover:text-brown-700 hover:bg-gray-100"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white">
          <div className="p-6">
            <Image
              src="/sekang-hospital-logo.png"
              alt="세강병원 SEKANG HOSPITAL"
              width={180}
              height={60}
              className="mb-8"
            />
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 hover:bg-gray-100 p-3 rounded-lg">
                <Users className="w-5 h-5" />
                <span>회원 관리</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 hover:bg-gray-100 p-3 rounded-lg">
                <Calendar className="w-5 h-5" />
                <span>예약 관리</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 hover:bg-gray-100 p-3 rounded-lg">
                <MessageSquare className="w-5 h-5" />
                <span>문의 관리</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 hover:bg-gray-100 p-3 rounded-lg">
                <FileText className="w-5 h-5" />
                <span>게시판 관리</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 hover:bg-gray-100 p-3 rounded-lg">
                <ImageIcon className="w-5 h-5" />
                <span>이미지 관리</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 hover:bg-gray-100 p-3 rounded-lg">
                <Settings className="w-5 h-5" />
                <span>설정</span>
              </a>
            </nav>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 text-gray-700 hover:text-brown-700 w-full p-3 rounded-lg hover:bg-gray-100 mt-4"
            >
              <LogOut className="w-5 h-5" />
              <span>로그아웃</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="md:ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">대시보드</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-brown-100 text-brown-700">
                  <Users className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">총 회원수</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-brown-100 text-brown-700">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">오늘의 예약</p>
                  <p className="text-2xl font-bold">23</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-brown-100 text-brown-700">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">미답변 문의</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-brown-100 text-brown-700">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">새로운 후기</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">최근 활동</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-brown-100 text-brown-700">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">새로운 회원 가입</p>
                      <p className="text-sm text-gray-500">홍길동님이 가입했습니다.</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">10분 전</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-brown-100 text-brown-700">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">새로운 예약</p>
                      <p className="text-sm text-gray-500">김철수님이 수액센터 예약을 신청했습니다.</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">30분 전</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-brown-100 text-brown-700">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">새로운 문의</p>
                      <p className="text-sm text-gray-500">이영희님이 비만센터 프로그램에 대해 문의했습니다.</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">1시간 전</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 