import { useCallback, useState } from 'react';

import styled from 'styled-components';

import { CardList, CardModelView, SearchBar } from '../../components';
import { CARD_LIST_STUB } from '../../stub/cards';

const Wrapper = styled.div`
  padding: 20px;
`;

const CardListWrapper = styled.section`
  margin-top: 50px;
`;

export default function MainPage() {
  const [cardListView, setCardListView] = useState<CardModelView[]>(CARD_LIST_STUB);

  const search = useCallback((searchValue: string) => {
    setCardListView(
      CARD_LIST_STUB.filter(({ title }) => title.toLowerCase().includes(searchValue.toLowerCase()))
    );
  }, []);

  return (
    <Wrapper>
      <SearchBar search={search} />
      <CardListWrapper>
        <CardList cardList={cardListView} />
      </CardListWrapper>
    </Wrapper>
  );
}
