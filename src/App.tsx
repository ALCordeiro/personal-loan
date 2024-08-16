import React from 'react';
import './App.css';
import { AppWrapper } from './App.styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';
import { FormSubmissionProvider } from './context/FormSubmissionContext';

function App() {
  return (
    <AppWrapper>
      <FormSubmissionProvider>
        <Router>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/success" Component={SuccessPage} />
          </Routes>
        </Router>
      </FormSubmissionProvider>
    </AppWrapper>
  );
}

export default App;
