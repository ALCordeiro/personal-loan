import React from 'react';
import './App.css';
import { AppWrapper } from './App.styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';
import { FormSubmissionProvider } from './context/FormSubmissionContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <AppWrapper>
      <DndProvider backend={HTML5Backend}>
        <FormSubmissionProvider>
          <Router>
            <Routes>
              <Route path="/" Component={HomePage} />
              <Route path="/success" Component={SuccessPage} />
            </Routes>
          </Router>
        </FormSubmissionProvider>
      </DndProvider>
    </AppWrapper>
  );
}

export default App;
