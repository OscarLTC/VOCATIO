import { render } from '@testing-library/react';

import ReportsPdf from './reports-pdf';

describe('ReportsPdf', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReportsPdf />);
    expect(baseElement).toBeTruthy();
  });
});
