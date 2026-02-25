import { Trophy, Target, User, Clock } from 'lucide-react';

export const MatchResults = () => {
  const results = [
    { date: '2026-02-01', duration: '35분', winner: { name: '팀 레드', score: 32 }, loser: { name: '팀 블루', score: 18 }, mvp: '플레이어A' },
    { date: '2026-02-01', duration: '43분', winner: { name: '팀 블루', score: 28 }, loser: { name: '팀 레드', score: 22 }, mvp: '플레이어B' }
  ];

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-20">
      <div className="p-5 border-b border-slate-100 bg-slate-50/30 font-bold text-slate-900 flex items-center gap-2">
        <Trophy size={18} className="text-amber-500" /> 내전 결과
      </div>
      <div className="p-6 space-y-4">
        {results.map((res, idx) => (
          <div key={idx} className="p-5 rounded-xl border border-slate-100 bg-white">
            <div className="flex justify-between items-center mb-4 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1"><Trophy size={14} className="text-amber-400"/>{res.date}</span>
              <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded text-slate-500"><Clock size={12}/>{res.duration}</span>
            </div>
            <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex flex-col items-center gap-2 w-24"><span className="text-sm font-bold text-slate-900">{res.winner.name}</span><span className="px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-md uppercase">Win</span></div>
              <div className="flex flex-col items-center"><Target size={20} className="text-slate-300 mb-1" /><div className="text-xl font-black text-slate-900">{res.winner.score} - {res.loser.score}</div></div>
              <div className="flex flex-col items-center gap-2 w-24"><span className="text-sm font-bold text-slate-500">{res.loser.name}</span><span className="px-3 py-1 bg-rose-500 text-white text-[10px] font-bold rounded-md uppercase">Loss</span></div>
            </div>
            <div className="pt-4 border-t border-slate-50 flex items-center gap-2 text-xs"><User size={12} className="text-amber-500" /><span className="font-bold text-slate-400">MVP:</span><span className="font-bold text-slate-700">{res.mvp}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
};