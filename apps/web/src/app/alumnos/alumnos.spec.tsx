import { render } from '@testing-library/react';

import Alumnos from './alumnos';

describe('Alumnos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alumnos />);
    expect(baseElement).toBeTruthy();
  });
});
