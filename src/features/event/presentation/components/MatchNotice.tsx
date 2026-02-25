'use client';

import { useState } from 'react';

export const MatchNotice = () => {
  const [activeTab, setActiveTab] = useState('일정표');

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
      <div className="p-5 border-b border-slate-100 bg-slate-50/30 font-bold text-slate-900">내전 공지</div>
      <div className="flex bg-slate-100/50 p-1 mx-5 mt-5 rounded-xl border border-slate-200/50">
        {['일정표', '규칙 확인'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
              activeTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-6">
        {activeTab === '일정표' ? (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-800 mb-4">2026년 2월 내전 일정</h3>
            {[{ title: '1차 내전', date: '2월 8일 (토) 19:00' }, { title: '2차 내전', date: '2월 15일 (토) 19:00' }, { title: '3차 내전', date: '2월 22일 (토) 19:00' }, { title: '결승전', date: '2월 28일 (금) 20:00' }].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0">
                <span className="text-sm font-medium text-slate-700">{item.title}</span>
                <span className="text-sm text-slate-500 font-sans">{item.date}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-800 mb-3">내전 규칙</h3>
              <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
                <li>5vs5 소환사의 협곡 일반 게임</li>
                <li>밴픽은 팀 리더가 진행</li>
                <li>모든 챔피언 사용 가능</li>
                <li>고의 트롤 및 욕설 시 경고 후 퇴출</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};