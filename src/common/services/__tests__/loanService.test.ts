import { submitLoanApplication } from "../loanService";

describe('submitLoanApplication', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should throw an error for "API Error" loan purpose', async () => {
    await expect(submitLoanApplication(1000, 'API Error', '12')).rejects.toThrow('Simulated API error');
  });

  it('should submit loan application successfully', async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ success: true }),
      headers: {
        get: jest.fn().mockReturnValue('application/json'),
      },
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse as any);

    const result = await submitLoanApplication(1000, 'Personal', '12');
    expect(result).toEqual({ success: true });
    expect(global.fetch).toHaveBeenCalledWith('https://clutch-interview-service.herokuapp.com/submissions', expect.any(Object));
  });

  it('should throw an error if response is not JSON', async () => {
    const mockResponse = {
      ok: true,
      headers: {
        get: jest.fn().mockReturnValue('text/html'),
      },
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse as any);

    await expect(submitLoanApplication(1000, 'Personal', '12')).rejects.toThrow('Received non-JSON response');
  });

  it('should throw an error if response is not ok', async () => {
    const mockResponse = {
      ok: false,
      json: jest.fn().mockResolvedValue({ message: 'Failed to submit loan application' }),
      headers: {
        get: jest.fn().mockReturnValue('application/json'),
      },
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse as any);

    await expect(submitLoanApplication(1000, 'Personal', '12')).rejects.toThrow('Failed to submit loan application');
  });

  it('should throw a generic error if response is not ok and no message is provided', async () => {
    const mockResponse = {
      ok: false,
      json: jest.fn().mockResolvedValue({}),
      headers: {
        get: jest.fn().mockReturnValue('application/json'),
      },
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse as any);

    await expect(submitLoanApplication(1000, 'Personal', '12')).rejects.toThrow('Failed to submit loan application');
  });
});
