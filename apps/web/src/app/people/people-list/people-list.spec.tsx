import { render } from '@testing-library/react';

import PeopleList from './people-list';

describe('AlumnosList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PeopleList />);
    expect(baseElement).toBeTruthy();
  });
});
