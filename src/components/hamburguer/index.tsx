import React, { useState } from 'react';

import { HamburguerContainer } from './style';

function Hamburguer({ open, setOpen }) {
  return (
    <HamburguerContainer open={open} onClick={setOpen}>
      <div />
      <div />
      <div />
    </HamburguerContainer>
  );
}

export default Hamburguer;
