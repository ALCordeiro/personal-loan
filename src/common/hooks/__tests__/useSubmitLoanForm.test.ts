import { renderHook } from "@testing-library/react";
import { act } from "react";
import { useNavigate } from "react-router-dom";
import { useFormSubmission } from "../../../context/FormSubmissionContext";
import { IFormInput } from "../../interfaces/commonInterfaces";
import { submitLoanApplication } from "../../services/loanService";
import { useSubmitLoanForm } from "../useSubmitLoanForm";

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../../services/loanService', () => ({
  submitLoanApplication: jest.fn(),
}));

jest.mock('../../../context/FormSubmissionContext', () => ({
  useFormSubmission: jest.fn(),
}));

const mockNavigate = useNavigate as jest.MockedFunction<typeof useNavigate>;
const mockSubmitLoanApplication = submitLoanApplication as jest.MockedFunction<typeof submitLoanApplication>;
const mockUseFormSubmission = useFormSubmission as jest.MockedFunction<typeof useFormSubmission>;

describe('useSubmitLoanForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockNavigate.mockReturnValue(jest.fn());
    mockUseFormSubmission.mockReturnValue({ setFormSubmitted: jest.fn(), isFormSubmitted: false });
  });

  it('should submit the form successfully and navigate to success page', async () => {
    const mockResponse = '12345';
    mockSubmitLoanApplication.mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useSubmitLoanForm());
    const formData: IFormInput = {
      totalAmount: '$1000',
      loanPurpose: 'Car',
      loanMonths: '12',
    };

    await act(async () => {
      await result.current.onSubmit(formData);
    });

    expect(mockSubmitLoanApplication).toHaveBeenCalledWith(1000, 'Car', '12');
    expect(mockUseFormSubmission().setFormSubmitted).toHaveBeenCalledWith(true);
    expect(mockNavigate).toHaveBeenCalled();
    expect(result.current.submissionError).toBeNull();
  });
});
