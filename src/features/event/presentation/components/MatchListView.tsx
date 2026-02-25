'use client';

import { Swords } from 'lucide-react';
import { MatchNotice } from './MatchNotice';
import { MatchApplyForm } from './MatchApplyForm';
import { MatchResults } from './MatchResults';

export function MatchListView() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 md:pt-32 pb-24 font-sans overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4">
        <header className="flex items-center gap-3 mb-10">
          <div className="p-1.5 rounded-lg bg-slate-100 border border-slate-200">
            <Swords size={22} className="text-slate-600" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">내전 / 이벤트</h1>
        </header>

        <MatchNotice />
        <MatchApplyForm />
        <MatchResults />
      </div>
    </div>
  );
}