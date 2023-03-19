import styled from 'styled-components';
import { PropsWithChildren } from 'react';

export const ThumbWrapper = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const ThumbImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const ThumbList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const RsThumbList = ({ thumbList }: PropsWithChildren<{ thumbList: string[] }>) => (
  <ThumbList>
    {thumbList.slice(3).map((imgLink, id) => (
      <ThumbWrapper key={id}>
        <ThumbImg src={imgLink} alt="thumb" />
      </ThumbWrapper>
    ))}
    {thumbList.length > 4 && <div>+{thumbList.length - 4}</div>}
  </ThumbList>
);
