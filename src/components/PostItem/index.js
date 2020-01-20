import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function PostItem({ slug, title, category, description, date, timeToRead }) {
  return (
    <S.PostItemLink to={slug}>
      <S.PostItemWrapper>
        <S.PostItemInfo>
          <S.WrapperPostItemTitle>
            <S.PostItemTitle>{title}</S.PostItemTitle>
            <S.PostItemTag>{category}</S.PostItemTag>
          </S.WrapperPostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
          <S.PostItemDate>{date}</S.PostItemDate>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  );
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
};

export default PostItem;
