import { motion } from 'framer-motion';
import Header from '../components/Header';
import MissionCard from '../components/MissionCard';
import ProgressSection from '../components/ProgressSection';
import StreakSection from '../components/StreakSection';
import RecoverySection from '../components/RecoverySection';

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

export default function Home({ streak, progress, onReset }) {
  return (
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
        <ProgressSection progress={progress} />
        <StreakSection streak={streak} />
        <RecoverySection onReset={onReset} />
      </motion.main>
    </motion.div>
  );
}
