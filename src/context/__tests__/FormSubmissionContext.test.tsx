import React from 'react';
import { FormSubmissionProvider, useFormSubmission } from '../FormSubmissionContext';
import { act, renderHook } from '@testing-library/react';

describe('FormSubmissionContext', () => {
  it('should provide default value and allow updating the value', () => {
    const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <FormSubmissionProvider>{children}</FormSubmissionProvider>
    );

    const { result } = renderHook(() => useFormSubmission(), { wrapper });

    expect(result.current.isFormSubmitted).toBe(false);

    act(() => {
      result.current.setFormSubmitted(true);
    });

    expect(result.current.isFormSubmitted).toBe(true);
  });

  it('should throw an error', () => {
    const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <FormSubmissionProvider>{children}</FormSubmissionProvider>
    );

    const { result } = renderHook(() => useFormSubmission(), { wrapper });

    expect(result.current.isFormSubmitted).toBe(false);
  });
});
