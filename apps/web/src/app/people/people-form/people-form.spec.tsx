import { render } from '@testing-library/react';

import PersonForm from './people-form';

describe('AlumnosForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PersonForm formState={1} />);
    expect(baseElement).toBeTruthy();
  });
});
