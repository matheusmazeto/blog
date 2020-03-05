import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItemLink = styled(Link)`
  &:hover {
    color: var(--highlight);
  }
`;

export const PostItemWrapper = styled.section``;

export const PostItemInfo = styled.div``;

export const WrapperPostItemTitle = styled.section``;

export const PostItemTitle = styled.h1`
  color: var(--text);
`;

export const PostItemTag = styled.div``;

export const PostItemDescription = styled.p`
  color: var(--text);
`;

export const PostItemDate = styled.time`
  color: var(--text);
`;

export const TimeToRead = styled.section``;
