import React from 'react';

import { Button } from './styled';
import { MdArrowUpward } from 'react-icons/md';

function ButtonTop() {
  return (
    <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <MdArrowUpward size="2.5rem" />
    </Button>
  );
}

export default ButtonTop;
