import { useState } from 'react';

export default function LapPredictor() {
  const [pressure, setPressure] = useState(22);
  const [temp, setTemp] = useState(90);
  const [compound, setCompound] = useState('soft');

  // Mock prediction function (replace with actual model later)
  const predictLap = () => {
    const base = 90; // seconds
    const pressureEffect = (pressure - 22) * 0.05;
    const tempEffect = (temp - 90) * 0.02;
    const compoundEffect = compound === 'soft' ? -0.3 : compound === 'medium' ? 0 : 0.2;
    return (base + pressureEffect + tempEffect + compoundEffect).toFixed(2);
  };

  return (
    <div className="glass-card predictor">
      <h3>Lap Time Predictor</h3>
      <div className="slider-group">
        <label>Pressure (psi): {pressure}</label>
        <input type="range" min="18" max="26" value={pressure} onChange={(e) => setPressure(+e.target.value)} />
      </div>
      <div className="slider-group">
        <label>Temp (°C): {temp}</label>
        <input type="range" min="70" max="110" value={temp} onChange={(e) => setTemp(+e.target.value)} />
      </div>
      <div className="select-group">
        <label>Compound:</label>
        <select value={compound} onChange={(e) => setCompound(e.target.value)}>
          <option value="soft">Soft</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="prediction">
        Predicted lap: <span className="value">{predictLap()}s</span>
      </div>
    </div>
  );
}