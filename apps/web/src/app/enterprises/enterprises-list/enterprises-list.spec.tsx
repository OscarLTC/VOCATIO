import { render } from '@testing-library/react';

import EnterprisesList from './enterprises-list';

describe('EnterprisesList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EnterprisesList />);
    expect(baseElement).toBeTruthy();
  });
});
