import { render } from '@testing-library/react';

import Empresas from './empresas';

describe('Empresas', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Empresas />);
    expect(baseElement).toBeTruthy();
  });
});
