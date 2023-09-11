import { render } from '@testing-library/react';

import PdfDocumentEstilosDeAprendizaje from './pdf-document-estilos-de-aprendizaje';

describe('PdfDocumentEstilosDeAprendizaje', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PdfDocumentEstilosDeAprendizaje />);
    expect(baseElement).toBeTruthy();
  });
});
