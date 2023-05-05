import { render } from '@testing-library/react';

import SurveysPerson from './surveys-person';

describe('SurveysPerson', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SurveysPerson />);
    expect(baseElement).toBeTruthy();
  });
});
