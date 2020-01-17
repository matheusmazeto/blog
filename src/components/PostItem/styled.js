import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItemLink = styled(Link)`
  color: #8899a6;
  display: flex;
  padding: 0 25px;
  text-decoration: none;
  &:hover {
    color: #1fa1f2;
  }

  &:not(:last-child) {
    padding: 2rem;
  }
`;

export const PostItemWrapper = styled.section`
  align-items: center;
  display: flex;
  width: 100%;
`;

export const PostItemTag = styled.div``;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperPostItemTitle = styled.section`
  display: flex;
  align-items: center;
`;

export const PostItemDate = styled.time`
  font-size: 1.3rem;
  color: #888;
`;

export const PostItemTitle = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  font-size: 1.8rem;
  font-weight: 700;
  color: #000;
`;

export const PostItemDescription = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 2.5rem;
  margin-top: 1.3rem;
  color: #8899a6;
`;
