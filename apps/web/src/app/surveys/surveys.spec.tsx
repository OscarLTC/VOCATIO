import { render } from '@testing-library/react';

import Surveys from './surveys';

describe('Surveys', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Surveys />);
    expect(baseElement).toBeTruthy();
  });
});
