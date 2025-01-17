import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import Restaurants from '../Restaurants';

describe('Restaurants', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  it('에러없이 store의 내용을 출력한다.', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <Restaurants />
      </MemoryRouter>
    ));

    expect(dispatch).toBeCalled();

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
    expect(queryByText('마법사주방')).not.toBeNull();
  });
});
