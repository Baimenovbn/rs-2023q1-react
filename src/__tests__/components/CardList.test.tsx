import { render, screen } from '@testing-library/react';
import { CardList } from '../../components';
import { describe, it, expect } from 'vitest';
import { CARD_LIST_STUB } from '../../stub/cards';

const setUp = () => render(<CardList cardList={CARD_LIST_STUB} />);

describe('CardList component', () => {
  it('should render given items', () => {
    setUp();
    const listItems = screen.getAllByTestId('card-list-item');
    expect(listItems).toHaveLength(CARD_LIST_STUB.length);
  });

  it('should not render any card', () => {
    render(<CardList cardList={[]} />);
    const firstCard = screen.queryByText(/first card example/i);
    expect(firstCard).toBeNull();
  });
});
