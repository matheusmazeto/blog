import React, { useState } from 'react';

import { HamburguerContainer } from './style';

function Hamburguer() {
  const [open, setOpen] = useState(false);

  return (
    <HamburguerContainer open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </HamburguerContainer>
  );
}

export default Hamburguer;
