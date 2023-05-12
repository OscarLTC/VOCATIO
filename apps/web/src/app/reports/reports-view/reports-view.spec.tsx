import { render } from '@testing-library/react';

import ReportsView from './reports-view';

describe('ReportsView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReportsView />);
    expect(baseElement).toBeTruthy();
  });
});
