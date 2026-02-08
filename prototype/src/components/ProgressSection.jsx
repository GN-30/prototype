import { motion } from 'framer-motion';

const skills = [
  { name: 'Listening', progress: 35, color: 'bg-blue-500' },
  { name: 'Reading', progress: 28, color: 'bg-emerald-500' },
  { name: 'Writing', progress: 15, color: 'bg-amber-500' },
  { name: 'Speaking', progress: 22, color: 'bg-purple-500' },
];

export default function ProgressSection({ progress }) {
  const skills = [
    { name: 'Listening', value: progress.Listening, color: 'bg-blue-500' },
    { name: 'Reading', value: progress.Reading, color: 'bg-emerald-500' },
    { name: 'Writing', value: progress.Writing, color: 'bg-amber-500' },
    { name: 'Speaking', value: progress.Speaking, color: 'bg-purple-500' },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-1">Instant Progress Feedback</h2>
      <p className="text-sm text-gray-500 mb-4">You're moving closer to your target score.</p>
      
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm font-bold text-gray-900">{skill.value}%</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.value}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-full rounded-full ${skill.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
