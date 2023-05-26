import { render } from '@testing-library/react';

import PdfDownload from './pdf-download';

describe('PdfDownload', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PdfDownload />);
    expect(baseElement).toBeTruthy();
  });
});
