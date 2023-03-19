import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CARD_LIST_STUB } from '../../stub/cards';
import { RsThumbList } from '../../components/thumbs';

const setUp = (itemIndex: number) =>
  render(<RsThumbList thumbList={CARD_LIST_STUB.at(itemIndex)?.whoAdded || []} />);

describe('CardList component', () => {
  it('should render given items', () => {
    setUp(0);
    const listItems = screen.getAllByTestId('card-thumb');
    expect(listItems).toHaveLength((CARD_LIST_STUB.at(0)?.whoAdded || []).length);
  });

  it('should render left images value', () => {
    setUp(2);
    expect(screen.getByText(/3/)).toBeInTheDocument();
  });

  it('should have max list items quantity', () => {
    setUp(2);
    expect(screen.getAllByTestId('card-thumb')).toHaveLength(4);
  });
});
