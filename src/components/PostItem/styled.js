import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItemLink = styled(Link)`
  width: 100%;
  display: flex;
  padding: 2rem;
  text-decoration: none;

  &:hover {
    color: #ff4f00;
  }
`;

export const PostItemWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WrapperPostItemTitle = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostItemTitle = styled.h1`
  font-weight: bold;
  font-size: 1.8rem;
  font-weight: 700;
  color: #000;
`;

export const PostItemTag = styled.div``;

export const PostItemDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5rem;
  margin-top: 1.3rem;
  color: #000;
`;

export const PostItemDate = styled.time`
  font-size: 1.3rem;
  color: #5e5e5e;
`;

export const TimeToRead = styled.section``;
