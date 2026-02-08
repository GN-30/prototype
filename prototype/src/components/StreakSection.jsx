import { Flame, Medal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StreakSection({ streak }) {
  return (
    <section className="mb-8">
      <div className="flex gap-4">
        <div className="flex-1 bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-2xl border border-orange-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mb-2 bg-white p-2 rounded-full shadow-sm"
          >
            <Flame className={`w-6 h-6 ${streak > 0 ? 'text-orange-500 fill-orange-500' : 'text-gray-300 fill-transparent'}`} />
          </motion.div>
          <div className="text-2xl font-bold text-gray-900">{streak}-Day</div>
          <div className="text-xs text-orange-700 font-medium uppercase tracking-wide">
            {streak > 0 ? 'Consistency Streak' : 'Start streak'}
          </div>
        </div>
        
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 flex flex-col items-center justify-center text-center">
          <div className="mb-2 bg-white p-2 rounded-full shadow-sm">
            <Medal className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-sm font-bold text-gray-900 mb-1">Consistency Starter</div>
          <div className="text-[10px] text-blue-700 leading-tight">Badge Earned</div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-3">Complete today's mission to keep your streak alive.</p>
    </section>
  );
}
