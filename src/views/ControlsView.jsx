import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled(motion.button)`
  background-color: #2e7d32;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #1b5e20;
  }
  
  &:disabled {
    background-color: #c8e6c9;
    cursor: not-allowed;
  }
`;

const IconButton = styled(motion.button)`
  background-color: transparent;
  border: 2px solid #2e7d32;
  color: #2e7d32;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    background-color: #e8f5e9;
  }
`;

const ControlsView = ({ isActive, onStart, onPause, onReset, onSettingsClick }) => {
  return (
    <ControlsContainer>
      {!isActive ? (
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
        >
          Iniciar
        </Button>
      ) : (
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPause}
        >
          Pausar
        </Button>
      )}
      
      <Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
      >
        Reiniciar
      </Button>
      
      <IconButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onSettingsClick}
      >
        ⚙️
      </IconButton>
    </ControlsContainer>
  );
};

export default ControlsView;