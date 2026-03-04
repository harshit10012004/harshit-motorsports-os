import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LapCounter({ initialLaps = 1, bestLap = '1:32.4' }) {
  const [laps, setLaps] = useState(initialLaps);
  // Simulate lap increment every 10 seconds (for demo)
  useEffect(() => {
    const interval = setInterval(() => {
      setLaps(l => l + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="glass-card lap-counter">
      <div className="lap-row">
        <span className="label">Lap</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={laps}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="value"
          >
            {laps}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="lap-row">
        <span className="label">Best</span>
        <span className="value">{bestLap}</span>
      </div>
    </div>
  );
}