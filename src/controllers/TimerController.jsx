import React, { useEffect, useRef } from 'react';
import TimerModel from '../models/timerModel';
import AppView from '../views/AppView';
import useSound from 'use-sound';
import startSound from '../assets/sounds/start.mp3';
import pauseSound from '../assets/sounds/pause.mp3';
import completeSound from '../assets/sounds/complete.mp3';

const TimerController = () => {
  const timerModelRef = useRef(new TimerModel());
  const [timerState, setTimerState] = React.useState({});
  
  const [playStart] = useSound(startSound);
  const [playPause] = useSound(pauseSound);
  const [playComplete] = useSound(completeSound);
  
  useEffect(() => {
    const timerModel = timerModelRef.current;
    
    const unsubscribe = timerModel.subscribe((model) => {
      setTimerState({
        timeLeft: model.timeLeft,
        isActive: model.isActive,
        currentMode: model.currentMode,
        cycles: model.cycles,
      });
      
      // Check if timer just completed
      if (model.timeLeft === 0) {
        playComplete();
      }
    });
    
    // Initialize state
    setTimerState({
      timeLeft: timerModel.timeLeft,
      isActive: timerModel.isActive,
      currentMode: timerModel.currentMode,
      cycles: timerModel.cycles,
    });
    
    return unsubscribe;
  }, [playComplete]);
  
  useEffect(() => {
    const timerModel = timerModelRef.current;
    const intervalId = setInterval(() => {
      timerModel.tick();
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  const handleStart = () => {
    const timerModel = timerModelRef.current;
    timerModel.start();
    playStart();
  };
  
  const handlePause = () => {
    const timerModel = timerModelRef.current;
    timerModel.pause();
    playPause();
  };
  
  const handleReset = () => {
    const timerModel = timerModelRef.current;
    timerModel.reset();
  };
  
  const handleModeChange = (mode) => {
    const timerModel = timerModelRef.current;
    timerModel.setMode(mode);
  };
  
  const handleSettingsUpdate = (settings) => {
    const timerModel = timerModelRef.current;
    timerModel.updateSettings(settings);
  };

  return (
    <AppView
      timeLeft={timerState.timeLeft}
      isActive={timerState.isActive}
      currentMode={timerState.currentMode}
      cycles={timerState.cycles}
      onStart={handleStart}
      onPause={handlePause}
      onReset={handleReset}
      onModeChange={handleModeChange}
      onSettingsUpdate={handleSettingsUpdate}
    />
  );
};

export default TimerController;