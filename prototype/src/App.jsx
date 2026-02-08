import { motion } from 'framer-motion';
import Header from './components/Header';
import MissionCard from './components/MissionCard';
import ProgressSection from './components/ProgressSection';
import StreakSection from './components/StreakSection';
import RecoverySection from './components/RecoverySection';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center font-sans">
      <div className="w-full max-w-md bg-white min-h-screen shadow-xl overflow-hidden">
        <div className="px-6 py-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Header />
            </motion.div>
            <motion.main variants={item}>
              <MissionCard />
              <ProgressSection />
              <StreakSection />
              <RecoverySection />
            </motion.main>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
