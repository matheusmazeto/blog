import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: blue;
  display: flex;
`;

function test(n: number) {
  return n;
}

export default () => <Title>Hello world! {test(2)} </Title>;
