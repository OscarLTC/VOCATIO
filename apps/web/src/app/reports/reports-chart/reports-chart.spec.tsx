import { render } from '@testing-library/react';

import ReportsChart from './reports-chart';

describe('ReportsChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReportsChart />);
    expect(baseElement).toBeTruthy();
  });
});
