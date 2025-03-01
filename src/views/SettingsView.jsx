import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SettingsContainer = styled(motion.div)`
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
  color: #2e7d32;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  
  &:focus {
    border-color: #2e7d32;
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled(motion.button)`
  background-color: ${props => props.secondary ? 'transparent' : '#2e7d32'};
  color: ${props => props.secondary ? '#2e7d32' : 'white'};
  border: ${props => props.secondary ? '1px solid #2e7d32' : 'none'};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.secondary ? '#e8f5e9' : '#1b5e20'};
  }
`;

const SettingsView = ({ onSave, onCancel }) => {
  const [settings, setSettings] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    maxCycles: 4
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: parseInt(value, 10) || 0
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(settings);
  };

  return (
    <SettingsContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 style={{ color: '#2e7d32', marginTop: 0 }}>Configuración</h2>
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="pomodoro">Duración Pomodoro (minutos)</Label>
          <Input
            type="number"
            id="pomodoro"
            name="pomodoro"
            min="1"
            max="60"
            value={settings.pomodoro}
            onChange={handleChange}
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="shortBreak">Duración Descanso Corto (minutos)</Label>
          <Input
            type="number"
            id="shortBreak"
            name="shortBreak"
            min="1"
            max="30"
            value={settings.shortBreak}
            onChange={handleChange}
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="longBreak">Duración Descanso Largo (minutos)</Label>
          <Input
            type="number"
            id="longBreak"
            name="longBreak"
            min="1"
            max="60"
            value={settings.longBreak}
            onChange={handleChange}
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="maxCycles">Ciclos antes del descanso largo</Label>
          <Input
            type="number"
            id="maxCycles"
            name="maxCycles"
            min="1"
            max="10"
            value={settings.maxCycles}
            onChange={handleChange}
          />
        </FormGroup>
        
        <ButtonGroup>
          <Button type="button" secondary onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit">
            Guardar
          </Button>
        </ButtonGroup>
      </Form>
    </SettingsContainer>
  );
};

export default SettingsView;
