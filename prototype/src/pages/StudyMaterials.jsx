import { ArrowLeft, PlayCircle, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function StudyMaterials({ onComplete }) {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center font-sans">
        <div className="w-full max-w-md bg-white min-h-screen shadow-xl overflow-hidden flex flex-col">
            <header className="px-6 py-6 bg-white border-b border-gray-100 sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <Link to="/" className="p-2 -ml-2 hover:bg-gray-50 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </Link>
                    <h1 className="text-xl font-bold text-gray-900">Today's Materials</h1>
                </div>
            </header>

            <main className="flex-1 p-6 space-y-6 overflow-y-auto">
                {/* Video Section */}
                <section>
                    <div className="flex items-center gap-2 mb-3">
                        <PlayCircle className="w-5 h-5 text-brand-600" />
                        <h2 className="text-lg font-bold text-gray-900">Listening Module</h2>
                    </div>
                    
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden group hover:border-brand-200 transition-all">
                        <div className="aspect-video bg-gray-900 relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                            <PlayCircle className="w-12 h-12 text-white opacity-90 group-hover:scale-110 transition-transform" />
                            <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">07:00</span>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-900 mb-1">Matching Headings Strategy</h3>
                            <p className="text-sm text-gray-500">Master the art of identifying key themes in listening passages.</p>
                        </div>
                    </div>
                </section>

                {/* Reading Section */}
                <section>
                    <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-5 h-5 text-brand-600" />
                        <h2 className="text-lg font-bold text-gray-900">Reading Practice</h2>
                    </div>

                    <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((q) => (
                            <motion.div 
                                key={q}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: q * 0.05 }}
                                className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-start gap-3 hover:bg-white hover:shadow-sm transition-all cursor-pointer"
                            >
                                <div className="mt-0.5 w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs font-medium text-gray-500">
                                    {q}
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-900 text-sm font-medium">Question {q}</p>
                                    <p className="text-gray-500 text-xs mt-0.5">Skimming & Scanning</p>
                                </div>
                                <CheckCircle2 className="w-5 h-5 text-gray-300" />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <div className="p-6 border-t border-gray-100 bg-white">
                <button 
                    onClick={onComplete}
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg shadow-brand-200 transition-colors"
                >
                    Complete Mission
                </button>
            </div>
        </div>
    </div>
  );
}
