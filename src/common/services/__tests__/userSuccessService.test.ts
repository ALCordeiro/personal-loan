import { getUserData } from "../userSuccessService";

describe('getUserData', () => {
  beforeEach(() => {
    // Limpa todos os mocks antes de cada teste
    jest.clearAllMocks();
  });

  it('should fetch user data successfully', async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ id: '123', name: 'John Doe' }),
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse as any);

    const result = await getUserData('123');
    expect(result).toEqual({ id: '123', name: 'John Doe' });
    expect(global.fetch).toHaveBeenCalledWith('https://clutch-interview-service.herokuapp.com/loans?userId=123');
  });

  it('should throw an error if response is not ok', async () => {
    const mockResponse = {
      ok: false,
      json: jest.fn().mockResolvedValue({}),
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse as any);

    await expect(getUserData('123')).rejects.toThrow('Network response was not ok');
  });

  it('should handle fetch errors', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Fetch error'));

    await expect(getUserData('123')).rejects.toThrow('Fetch error');
  });

  it('should throw an error if response is not JSON', async () => {
    const mockResponse = {
      ok: true,
      text: jest.fn().mockResolvedValue('Not JSON'),
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse as any);

    // @ts-ignore
    const originalJson = mockResponse.json;
    // @ts-ignore
    mockResponse.json = jest.fn(() => {
      throw new Error('Unexpected token');
    });

    await expect(getUserData('123')).rejects.toThrow('Unexpected token');
  });
});
