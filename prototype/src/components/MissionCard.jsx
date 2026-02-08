import { Play, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MissionCard() {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-900">Today's Mission</h2>
        <span className="text-sm font-medium text-gray-500">15 min</span>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-brand-500"></div>
        
        <div className="p-5">
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-brand-100 p-1.5 rounded-full">
                <Play className="w-4 h-4 text-brand-600" />
              </div>
              <div>
                <h3 className="text-gray-900 font-medium">Watch 1 Listening video</h3>
                <p className="text-sm text-gray-500">Techniques for matching headings • 7 min</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-brand-100 p-1.5 rounded-full">
                <BookOpen className="w-4 h-4 text-brand-600" />
              </div>
              <div>
                <h3 className="text-gray-900 font-medium">Attempt 5 Reading questions</h3>
                <p className="text-sm text-gray-500">Practice skimming & scanning • 8 min</p>
              </div>
            </div>
          </div>
          
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-200 transition-colors"
          >
            Start Now
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
