import { render } from '@testing-library/react';

import DashboardLastTenSurveys from './dashboard-last-ten-surveys';

describe('DashboardLastTenSurveys', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardLastTenSurveys />);
    expect(baseElement).toBeTruthy();
  });
});
