import { render } from '@testing-library/react';

import DashboardFiveEnterprises from './dashboard-five-enterprises';

describe('DashboardFiveEnterprises', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardFiveEnterprises />);
    expect(baseElement).toBeTruthy();
  });
});
