import { render } from '@testing-library/react';

import AlumnosList from './alumnos-list';

describe('AlumnosList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlumnosList />);
    expect(baseElement).toBeTruthy();
  });
});
