import { renderHook } from '@testing-library/react';
import useIsMobile from '../useIsMobile';
import useWidth from '../useWidth';
jest.mock('../useWidth');

const mockedUseWidth = useWidth as jest.MockedFunction<typeof useWidth>;

describe('useIsMobile', () => {
  it('should return true when is equal 768', () => {
    mockedUseWidth.mockReturnValue(768);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);

    mockedUseWidth.mockReturnValue(500);
    const { result: result2 } = renderHook(() => useIsMobile());
    expect(result2.current).toBe(true);
  });

  it('should return false when is not 768', () => {
    mockedUseWidth.mockReturnValue(769);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    mockedUseWidth.mockReturnValue(1024);
    const { result: result2 } = renderHook(() => useIsMobile());
    expect(result2.current).toBe(false);
  });
});
