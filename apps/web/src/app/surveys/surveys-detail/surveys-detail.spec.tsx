import { render } from '@testing-library/react';

import SurveysDetail from './surveys-detail';

describe('SurveysDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SurveysDetail />);
    expect(baseElement).toBeTruthy();
  });
});
