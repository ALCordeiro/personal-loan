import { renderHook, waitFor } from "@testing-library/react";
import { getUserData } from "../../services/userSuccessService";
import { useUserData } from "../useUserData";


jest.mock('../../services/userSuccessService', () => ({
  getUserData: jest.fn(),
}));

const mockGetUserData = getUserData as jest.MockedFunction<typeof getUserData>;

describe('useUserData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch user data successfully', async () => {
    const mockUserData = { id: '123', name: 'John Doe' };
    mockGetUserData.mockResolvedValue(mockUserData);

    const { result } = renderHook(() => useUserData('123'));

    expect(result.current.userData).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();

    await waitFor(() => expect(result.current.loading).toBe(false));
    await waitFor(() => expect(result.current.userData).toEqual(mockUserData));
    await waitFor(() => expect(result.current.error).toBeNull());
  });

  it('should handle error while fetching user data', async () => {
    mockGetUserData.mockRejectedValue(new Error('Network error'));

    const { result } = renderHook(() => useUserData('123'));

    expect(result.current.userData).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();

    await waitFor(() => expect(result.current.loading).toBe(false));
    await waitFor(() => expect(result.current.userData).toBeNull());
    await waitFor(() => expect(result.current.error).toBe('Failed to fetch user data'));
  });
});
