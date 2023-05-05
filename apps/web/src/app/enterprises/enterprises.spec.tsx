import { render } from '@testing-library/react';

import Enterprises from './enterprises';

describe('Enterprises', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Enterprises />);
    expect(baseElement).toBeTruthy();
  });
});
