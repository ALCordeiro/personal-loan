import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { AppWrapper } from './App.styles';

export interface IFormInput {
  totalAmount: string;
  loanPurpose: string;
}

function App() {
  return (
    <AppWrapper>
      <HomePage />
    </AppWrapper>
  );
}

export default App;
