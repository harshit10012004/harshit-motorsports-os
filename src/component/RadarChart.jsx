// src/components/RadarChart.jsx
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function ProjectRadar({ data, color }) {
  // data should be an array of { metric, value } (value 0–100)
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="rgba(255,255,255,0.2)" />
        <PolarAngleAxis dataKey="metric" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: 'rgba(255,255,255,0.5)' }} />
        <Radar name="Project" dataKey="value" stroke={color} fill={color} fillOpacity={0.4} />
      </RadarChart>
    </ResponsiveContainer>
  );
}