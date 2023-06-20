import { render } from '@testing-library/react';

import PdfDocument from './pdf-document';

describe('PdfDocument', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PdfDocument />);
    expect(baseElement).toBeTruthy();
  });
});
