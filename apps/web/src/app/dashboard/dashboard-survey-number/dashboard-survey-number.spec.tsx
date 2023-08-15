import { render } from '@testing-library/react';

import DashboardSurveyNumber from './dashboard-survey-number';

describe('DashboardSurveyNumber', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardSurveyNumber />);
    expect(baseElement).toBeTruthy();
  });
});
