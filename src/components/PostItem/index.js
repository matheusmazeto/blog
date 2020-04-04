import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function PostItem({ slug, title, category, description, date, timeToRead }) {
  return (
    <S.LinkContainer to={slug}>
      <S.Top>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
      </S.Top>
      <S.Bottom>
        <S.Description>{description}</S.Description>
        <S.Tag>{category}</S.Tag>
      </S.Bottom>
    </S.LinkContainer>
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
