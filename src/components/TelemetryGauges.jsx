// src/components/TelemetryGauges.jsx
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

export default function TelemetryGauges() {
  const [rpmData, setRpmData] = useState([]);
  const [lapData, setLapData] = useState([]);

  useEffect(() => {
    // Simulate live F1 telemetry
    const rpmInterval = setInterval(() => {
      setRpmData(prev => {
        const newData = [...prev.slice(-19), { time: Date.now(), rpm: 8000 + Math.random() * 6000 }];
        return newData.length > 20 ? newData.slice(-20) : newData;
      });
    }, 500);

    const lapInterval = setInterval(() => {
      setLapData(prev => {
        const newLap = prev.length ? prev[prev.length - 1].lap + 0.001 : 1.274;
        const newData = [...prev.slice(-9), { sector: `S${prev.length % 3 + 1}`, time: newLap }];
        return newData.length > 10 ? newData.slice(-10) : newData;
      });
    }, 1200);

    return () => {
      clearInterval(rpmInterval);
      clearInterval(lapInterval);
    };
  }, []);

  return (
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 p-2">
      {/* RPM Gauge */}
      <motion.div 
        class="glass-card p-6 h-64"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div class="flex items-center gap-3 mb-4">
          <div class="w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
          <h3 class="font-bold text-lg text-white">Engine RPM</h3>
          <span class="ml-auto text-xs text-slate-400">Live</span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rpmData}>
            <defs>
              <linearGradient id="rpmGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" hide axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip />
            <Line type="monotone" dataKey="rpm" stroke="url(#rpmGradient)" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Lap Progress */}
      <motion.div 
        class="glass-card p-6 h-64"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div class="flex items-center gap-3 mb-4">
          <div class="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
          <h3 class="font-bold text-lg text-white">Lap Progress</h3>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lapData}>
            <XAxis dataKey="sector" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8' }} />
            <YAxis hide />
            <Tooltip />
            <Line type="step" dataKey="time" stroke="#14B8A6" strokeWidth={4} dot={{ fill: '#14B8A6', strokeWidth: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
