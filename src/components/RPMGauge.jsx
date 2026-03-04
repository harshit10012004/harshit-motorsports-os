import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function RPMGauge({ rpm, maxRpm = 8000 }) {
  const percentage = (rpm / maxRpm) * 100;
  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar
        value={percentage}
        text={`${rpm} rpm`}
        styles={buildStyles({
          textSize: '16px',
          pathColor: `rgba(0, 164, 239, ${percentage / 100})`, // Ultramarine
          textColor: '#fff',
          trailColor: 'rgba(255,255,255,0.1)',
        })}
      />
    </div>
  );
}