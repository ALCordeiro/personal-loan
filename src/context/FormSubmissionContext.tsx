import React, { createContext, useContext, useState } from 'react';

interface FormSubmissionContextProps {
  isFormSubmitted: boolean;
  setFormSubmitted: (value: boolean) => void;
}

const FormSubmissionContext = createContext<FormSubmissionContextProps | undefined>(undefined);

export const FormSubmissionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  return (
    <FormSubmissionContext.Provider value={{ isFormSubmitted, setFormSubmitted }}>
      {children}
    </FormSubmissionContext.Provider>
  );
};

export const useFormSubmission = (): FormSubmissionContextProps => {
  const context = useContext(FormSubmissionContext);
  if (!context) {
    throw new Error('error context');
  }
  return context;
};