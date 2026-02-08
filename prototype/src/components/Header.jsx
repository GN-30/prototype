import { Calendar, Clock, Target } from 'lucide-react';

export default function Header() {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Your IELTS Momentum Plan</h1>
      
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-brand-50 p-3 rounded-xl border border-brand-100 flex flex-col items-center text-center">
          <Target className="w-5 h-5 text-brand-600 mb-1" />
          <span className="text-xs text-brand-600 font-medium uppercase tracking-wide">Target</span>
          <span className="text-lg font-bold text-gray-900">7.5</span>
        </div>
        
        <div className="bg-brand-50 p-3 rounded-xl border border-brand-100 flex flex-col items-center text-center">
          <Calendar className="w-5 h-5 text-brand-600 mb-1" />
          <span className="text-xs text-brand-600 font-medium uppercase tracking-wide">Exam In</span>
          <span className="text-lg font-bold text-gray-900">45d</span>
        </div>
        
        <div className="bg-brand-50 p-3 rounded-xl border border-brand-100 flex flex-col items-center text-center">
          <Clock className="w-5 h-5 text-brand-600 mb-1" />
          <span className="text-xs text-brand-600 font-medium uppercase tracking-wide">Daily</span>
          <span className="text-lg font-bold text-gray-900">15m</span>
        </div>
      </div>
    </header>
  );
}
