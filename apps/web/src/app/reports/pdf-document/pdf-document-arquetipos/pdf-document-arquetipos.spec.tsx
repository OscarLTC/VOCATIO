import { render } from '@testing-library/react';

import PdfDocumentArquetipos from './pdf-document-arquetipos';

describe('PdfDocumentArquetipos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PdfDocumentArquetipos />);
    expect(baseElement).toBeTruthy();
  });
});
