'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export const MatchApplyForm = () => {
  // 기본 선택값: 리그 오브 레전드
  const [selectedGame, setSelectedGame] = useState('리그 오브 레전드');

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
      {/* 폼 헤더 */}
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Send size={20} className="text-blue-600" />
          내전 신청
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          게임 종류를 선택하고 포지션을 선택해주세요. 포지션은 다중 선택 가능하며, 선택한 순서대로 내전 편성에 반영됩니다.
        </p>
      </div>

      <div className="p-8 space-y-6">
        {/* 1. 게임 종류 선택 (4가지 케이스) */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">게임 종류</label>
          <select 
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          >
            <option>리그 오브 레전드</option>
            <option>발로란트</option>
            <option>오버워치</option>
            <option>기타</option>
          </select>
        </div>

        {/* 2. 게임별 동적 입력 필드 (이미지 기획 반영) */}
        
        {/* 케이스 A: 리그 오브 레전드 -> 소환사명 */}
        {selectedGame === '리그 오브 레전드' && (
          <div className="space-y-2 animate-in fade-in duration-300">
            <label className="text-sm font-bold text-slate-700">소환사명</label>
            <input type="text" placeholder="소환사명을 입력하세요" className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50" />
          </div>
        )}

        {/* 케이스 B: 발로란트 / 오버워치 -> 게임 닉네임 */}
        {(selectedGame === '발로란트' || selectedGame === '오버워치') && (
          <div className="space-y-2 animate-in fade-in duration-300">
            <label className="text-sm font-bold text-slate-700">게임 닉네임</label>
            <input type="text" placeholder="게임 닉네임을 입력하세요" className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50" />
          </div>
        )}

        {/* 케이스 C: 기타 -> 스팀 친구 코드 */}
        {selectedGame === '기타' && (
          <div className="space-y-2 animate-in fade-in duration-300">
            <label className="text-sm font-bold text-slate-700">스팀 친구 코드 or 게임 닉네임</label>
            <input type="text" placeholder="스팀 친구 코드 (예: 123456789)을 입력하세요" className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50" />
          </div>
        )}

        {/* 3. 포지션 선택 (기타 제외) */}
        {selectedGame !== '기타' && (
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700">
              포지션 선택 (최대 3개, 순서대로 우선순위 반영)
            </label>
            <div className="flex flex-wrap gap-3">
              {(selectedGame === '리그 오브 레전드' 
                ? ['탑', '정글', '미드', '원딜', '서포터'] 
                : selectedGame === '오버워치' 
                ? ['딜러', '힐러', '탱커']
                : ['엔트리', '척후대', '연막', '감시자'] 
              ).map((pos) => (
                <label key={pos} className="flex-1 min-w-[100px] flex items-center justify-center h-12 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 has-[:checked]:bg-blue-50 has-[:checked]:border-blue-200 has-[:checked]:text-blue-700 transition-all">
                  <input type="checkbox" className="hidden" />
                  <span className="text-sm font-medium">{pos}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* 4. 티어 정보 (기타 제외) */}
        {selectedGame !== '기타' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">현재 티어</label>
              <input type="text" placeholder="현재 티어를 입력하세요 (예: 골드 3, 다이아 1)" className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">최고 티어 (선택 사항)</label>
              <input type="text" placeholder="최고 티어를 입력하세요 (예: 플래티넘 1)" className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50" />
            </div>
          </div>
        )}

        {/* 5. 가능한 날짜 (공통) */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">가능한 날짜</label>
          <input type="text" placeholder="예: 2/8, 2/15, 2/22" className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50" />
          <p className="text-[11px] text-slate-400">참여 가능한 날짜를 입력해주세요 (콤마로 구분)</p>
        </div>

        {/* 신청 버튼 */}
        <button className="w-full h-14 bg-[#0F172A] text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98]">
          신청하기
        </button>
      </div>
    </section>
  );
};