import React from 'react';
import { Atom, useAtom, swap, deref } from '@dbeining/react-atom';

import clickCountAtom from './clickCountAtom.js';

const Button = () => {
  const clickCount = useAtom(clickCountAtom);
  return (
    <input
      type="button"
      value="Pickle me"
      style={clickCount >= 10 ? { color: 'rebeccapurple' } : { color: 'blue' }}
      onClick={() => swap(clickCountAtom, state => state + 1)}
    />
  );
};

export default Button;
