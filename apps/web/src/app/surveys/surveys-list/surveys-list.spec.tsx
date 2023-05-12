import { render } from '@testing-library/react';

import SurveysList from './surveys-list';

describe('SurveysList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SurveysList />);
    expect(baseElement).toBeTruthy();
  });
});
