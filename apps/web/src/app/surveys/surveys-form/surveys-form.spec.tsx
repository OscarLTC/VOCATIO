import { render } from '@testing-library/react';

import SurveysForm from './surveys-form';

describe('SurveysForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SurveysForm />);
    expect(baseElement).toBeTruthy();
  });
});
