import React from 'react';
import PropTypes from 'prop-types';

import { Javascript } from 'styled-icons/boxicons-logos/Javascript';

import * as S from './styled';

function PostItem({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) {
  return (
    <S.PostItemLink to="/slug/">
      <S.PostItemWrapper>
        <S.PostItemInfo>
          <S.WrapperPostItemTitle>
            <S.PostItemTitle>
              Diga não ao Medium: tenha sua própria plataforma
            </S.PostItemTitle>
            <S.PostItemTag background="#47650b">
              <Javascript size="2.5rem" color="#000" />
            </S.PostItemTag>
          </S.WrapperPostItemTitle>
          <S.PostItemDescription>
            Algumas razões para você ter sua própria plataforma ao invés de
            soluções como o Medium.
          </S.PostItemDescription>
          <S.PostItemDate>
            30 de Julho de 2019 • 4 min de leitura
          </S.PostItemDate>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  );
}

export default PostItem;
