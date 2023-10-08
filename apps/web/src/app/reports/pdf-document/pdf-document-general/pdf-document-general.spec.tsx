import { render } from '@testing-library/react';

import PdfDocumentGeneral from './pdf-document-general';

describe('PdfDocumentGeneral', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PdfDocumentGeneral />);
    expect(baseElement).toBeTruthy();
  });
});
