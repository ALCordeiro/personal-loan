import { css } from 'styled-components';
import fontSize from '../fontSize';

const normalizeCSS = (cssString: string) => cssString.replace(/\s+/g, ' ').trim();

describe('fontSize', () => {
  it('should return correct CSS for a given font size', () => {
    const size = 16;
    const expectedCSS = css`
      font-size: ${size}px;
      font-family: 'Albert Sans', sans-serif;
    `;

    expect(normalizeCSS(fontSize(size).join(''))).toEqual(normalizeCSS(expectedCSS.join('')));
  });

  it('should return correct CSS for another font size', () => {
    const size = 24;
    const expectedCSS = css`
      font-size: ${size}px;
      font-family: 'Albert Sans', sans-serif;
    `;

    expect(normalizeCSS(fontSize(size).join(''))).toEqual(normalizeCSS(expectedCSS.join('')));
  });
});
