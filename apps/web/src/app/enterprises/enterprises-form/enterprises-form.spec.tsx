import { render } from '@testing-library/react';

import EnterprisesForm from './enterprises-form';

describe('EnterprisesForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EnterprisesForm />);
    expect(baseElement).toBeTruthy();
  });
});
