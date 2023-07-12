import { render } from '@testing-library/react';

import DashboardLastSurveyDetail from './dashboard-last-survey-detail';

describe('DashboardLastSurveyDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardLastSurveyDetail />);
    expect(baseElement).toBeTruthy();
  });
});
