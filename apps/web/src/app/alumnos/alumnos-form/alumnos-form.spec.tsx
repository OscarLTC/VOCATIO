import { render } from '@testing-library/react';

import AlumnosForm from './alumnos-form';

describe('AlumnosForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlumnosForm formState={1} />);
    expect(baseElement).toBeTruthy();
  });
});
