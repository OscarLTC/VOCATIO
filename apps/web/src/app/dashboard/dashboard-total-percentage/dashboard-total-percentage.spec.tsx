import { render } from '@testing-library/react';

import DashboardTotalPercentage from './dashboard-total-percentage';

describe('DashboardTotalPercentage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardTotalPercentage />);
    expect(baseElement).toBeTruthy();
  });
});
