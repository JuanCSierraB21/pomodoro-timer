import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TimerContainer = styled.div`
  margin: 2rem 0;
`;

const TimerCircle = styled(motion.div)`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: #e8f5e9;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TimerDisplay = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #2e7d32;
`;

const ProgressRing = styled(motion.svg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

const TimerView = ({ timeLeft, currentMode, isActive }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  
  // Get total time based on current mode
  const getTotalTime = () => {
    switch(currentMode) {
      case 'pomodoro': return 25 * 60;
      case 'shortBreak': return 5 * 60;
      case 'longBreak': return 15 * 60;
      default: return 25 * 60;
    }
  };
  
  const totalTime = getTotalTime();
  const progress = ((totalTime - timeLeft) / totalTime) * 100;
  const circumference = 2 * Math.PI * 117; // 250 - 2*8 (for stroke width)
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return (
    <TimerContainer>
      <TimerCircle
        animate={{ scale: isActive ? [1, 1.03, 1] : 1 }}
        transition={{ 
          repeat: isActive ? Infinity : 0,
          duration: 2
        }}
      >
        <ProgressRing viewBox="0 0 250 250">
          <circle
            cx="125"
            cy="125"
            r="117"
            fill="none"
            stroke="#c8e6c9"
            strokeWidth="8"
          />
          <motion.circle
            cx="125"
            cy="125"
            r="117"
            fill="none"
            stroke="#2e7d32"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.5 }}
          />
        </ProgressRing>
        <TimerDisplay>
          {formatTime(minutes)}:{formatTime(seconds)}
        </TimerDisplay>
      </TimerCircle>
    </TimerContainer>
  );
};

export default TimerView;