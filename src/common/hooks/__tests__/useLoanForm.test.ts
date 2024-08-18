import { renderHook } from "@testing-library/react";
import { act } from "react";
import { useLoanForm } from "../useLoanForm";
import { useForm } from "react-hook-form";

jest.mock('../../services/offerService');
jest.mock('../../utils/formatCurrency');
jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn(),
}));

const mockUseForm = useForm as jest.MockedFunction<typeof useForm>;

describe('useLoanForm', () => {
  let setValue: jest.Mock;

  beforeEach(() => {
    setValue = jest.fn();
    mockUseForm.mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      // @ts-ignore
      control: jest.fn(),
      setValue,
      // @ts-ignore
      watch: jest.fn((field) => {
        switch (field) {
          // @ts-ignore
          case 'totalAmount':
            return '10';
          // @ts-ignore
          case 'loanPurpose':
            return 'Car';
          // @ts-ignore
          case 'loanMonths':
            return '12';
          default:
            return '';
        }
      }),
    });
    jest.clearAllMocks();
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useLoanForm());
    expect(result.current.offerResponse).toBeNull();
    expect(result.current.errorMessage).toBeNull();
    expect(result.current.loading).toBe(true);
  });

  it('should validate the form correctly', () => {
    const { result } = renderHook(() => useLoanForm());
    act(() => {
      result.current.handleSelectLoanPurpose({ value: 'Car', label: 'Car' });
      result.current.handleSelectLoanMonths({ value: '12', label: '12 months' });
      result.current.handleKeyUp({ currentTarget: { value: '1000' } } as any);
    });

    expect(setValue).toHaveBeenCalledWith("loanPurpose", "Car");
    expect(setValue).toHaveBeenCalledWith("loanMonths", "12");
    expect(result.current.isFormValid()).not.toBeNull()
  });
});
