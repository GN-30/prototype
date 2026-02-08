import { RotateCcw } from 'lucide-react';

export default function RecoverySection({ onReset }) {
  return (
    <section className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-200">
      <p className="text-gray-600 mb-3 text-sm">Missed a day? Restart with a 5-minute comeback task.</p>
      <button 
        onClick={onReset}
        className="text-brand-600 font-medium text-sm flex items-center justify-center gap-2 hover:underline mx-auto"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        Resume Momentum
      </button>
    </section>
  );
}
