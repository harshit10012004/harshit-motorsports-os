import { useState } from 'react';

export default function GripHeatmap({ data }) {
  // data: array of arrays (grid of grip values 0-1)
  const maxGrip = Math.max(...data.flat());
  return (
    <div className="heatmap-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${data[0].length}, 1fr)` }}>
      {data.flatMap((row, i) =>
        row.map((value, j) => (
          <div
            key={`${i}-${j}`}
            className="heatmap-cell"
            style={{
              backgroundColor: `rgba(48, 213, 200, ${value / maxGrip})`, // Teal
              width: '30px',
              height: '30px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            title={`Grip: ${value.toFixed(2)}`}
          />
        ))
      )}
    </div>
  );
}

// In GripHeatmap.jsx
export default function GripHeatmap({ data, color = '#30D5C8' }) {
  // ... use color in backgroundColor: `rgba(${hexToRgb(color)}, ${value})`
}