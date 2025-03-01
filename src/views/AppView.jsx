import React, { useState } from 'react';
import TimerView from './TimerView';
import ControlsView from './ControlsView';
import SettingsView from './SettingsView';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  color: #2e7d32;
  margin-bottom: 2rem;
`;

const ModeSwitcher = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ModeButton = styled.button`
  background-color: ${props => props.active ? '#2e7d32' : '#e0e0e0'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#2e7d32' : '#c8e6c9'};
  }
`;

const AppView = ({
  timeLeft,
  isActive,
  currentMode,
  cycles,
  onStart,
  onPause,
  onReset,
  onModeChange,
  onSettingsUpdate
}) => {
  const [showSettings, setShowSettings] = useState(false);
  
  const formatMode = (mode) => {
    switch(mode) {
      case 'pomodoro': return 'Pomodoro';
      case 'shortBreak': return 'Descanso Corto';
      case 'longBreak': return 'Descanso Largo';
      default: return mode;
    }
  };

  return (
    <AppContainer>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Pomodoro Timer</Title>
        
        <ModeSwitcher>
          <ModeButton 
            active={currentMode === 'pomodoro'} 
            onClick={() => onModeChange('pomodoro')}
          >
            Pomodoro
          </ModeButton>
          <ModeButton 
            active={currentMode === 'shortBreak'} 
            onClick={() => onModeChange('shortBreak')}
          >
            Descanso Corto
          </ModeButton>
          <ModeButton 
            active={currentMode === 'longBreak'} 
            onClick={() => onModeChange('longBreak')}
          >
            Descanso Largo
          </ModeButton>
        </ModeSwitcher>
        
        <TimerView 
          timeLeft={timeLeft} 
          currentMode={currentMode} 
          isActive={isActive} 
        />
        
        <ControlsView 
          isActive={isActive}
          onStart={onStart}
          onPause={onPause}
          onReset={onReset}
          onSettingsClick={() => setShowSettings(!showSettings)}
        />
        
        {showSettings && (
          <SettingsView 
            onSave={(settings) => {
              onSettingsUpdate(settings);
              setShowSettings(false);
            }}
            onCancel={() => setShowSettings(false)}
          />
        )}
        
        <div style={{ marginTop: '1rem', color: '#2e7d32' }}>
          Modo actual: {formatMode(currentMode)} | Ciclos: {cycles}
        </div>
      </motion.div>
    </AppContainer>
  );
};

export default AppView;
