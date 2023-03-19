import { PropsWithChildren } from 'react';
import { RsThumbList } from '../thumbs';
import {
  CardButton,
  CardFooter,
  CardImg,
  CardListWrapper,
  CardTitle,
  CardWrapper,
  InfoWrapper,
} from './styled';

export interface CardModelView {
  id: string;
  img: string;
  title: string;
  addedBy: string;
  journalName: string;
  whoAdded: string[];
}

export const Card = ({ img, title, addedBy, journalName, whoAdded }: CardModelView) => (
  <CardWrapper data-testid="card-list-item">
    <CardImg src={img} alt={title} />
    <InfoWrapper>
      <div>
        <CardTitle>{title}</CardTitle>
        <p>
          Added by {addedBy} in {journalName}
        </p>
      </div>
      <CardFooter>
        <RsThumbList thumbList={whoAdded} />
        <CardButton>Add</CardButton>
      </CardFooter>
    </InfoWrapper>
  </CardWrapper>
);

export const CardList = ({ cardList }: PropsWithChildren<{ cardList: CardModelView[] }>) => (
  <CardListWrapper>
    {cardList.map((card) => (
      <Card {...card} key={card.id} />
    ))}
  </CardListWrapper>
);
