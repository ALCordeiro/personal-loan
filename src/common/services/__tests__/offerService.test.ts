import { fetchOffer } from "../offerService";

describe('fetchOffer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should throw an error for "API Error" loan purpose', async () => {
    await expect(fetchOffer(1000, 'API Error', '12')).rejects.toThrow('Simulated API error');
  });

  it('should fetch offer successfully', async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ offer: 'Special Offer' }),
      headers: {
        get: jest.fn().mockReturnValue('application/json'),
      },
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse as any);

    const result = await fetchOffer(1000, 'Personal', '12');
    expect(result).toEqual({ offer: 'Special Offer' });
    expect(global.fetch).toHaveBeenCalledWith('https://clutch-interview-service.herokuapp.com/offers', expect.any(Object));
  });

  it('should throw an error if response is not JSON', async () => {
    const mockResponse = {
      ok: true,
      headers: {
        get: jest.fn().mockReturnValue('text/html'),
      },
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse as any);

    await expect(fetchOffer(1000, 'Personal', '12')).rejects.toThrow('Received non-JSON response');
  });

  it('should throw an error if response is not ok', async () => {
    const mockResponse = {
      ok: false,
      json: jest.fn().mockResolvedValue({ message: 'Failed to fetch offer' }),
      headers: {
        get: jest.fn().mockReturnValue('application/json'),
      },
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse as any);

    await expect(fetchOffer(1000, 'Personal', '12')).rejects.toThrow('Failed to fetch offer');
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

    await expect(fetchOffer(1000, 'Personal', '12')).rejects.toThrow('Failed to fetch offer');
  });
});
