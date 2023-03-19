import { render, screen } from '@testing-library/react';
import { Card } from '../../components';
import { describe, it, expect } from 'vitest';
import { CARD_LIST_STUB } from '../../stub/cards';

const setUp = () => render(<Card {...CARD_LIST_STUB[0]} />);

describe('CardList component', () => {
  it('should render card', () => {
    setUp();
    expect(screen.queryByText(CARD_LIST_STUB[0].title)).toBeInTheDocument();
  });
});
