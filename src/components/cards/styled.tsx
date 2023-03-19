import styled from 'styled-components';

export const CardWrapper = styled.li`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 50%;
  margin-bottom: 5px;
`;

export const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
  flex: 1;
  justify-content: space-between;
`;

export const CardTitle = styled.h4`
  margin-bottom: 10px;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardButton = styled.button`
  padding: 5px 2px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #e0e0e0;
`;

export const CardListWrapper = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`;
