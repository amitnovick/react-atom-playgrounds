import React from 'react';
import { Atom, useAtom, swap, deref } from '@dbeining/react-atom';

import stateAtom from './stateAtom.js';

const Button = () => {
  const { clickCount } = useAtom(stateAtom);
  return (
    <input
      type="button"
      value="Pickle me"
      style={clickCount >= 10 ? { color: 'palevioletred' } : { color: 'green' }}
      onClick={() =>
        swap(stateAtom, state => ({
          ...state,
          clickCount: state.clickCount + 1
        }))
      }
    />
  );
};

export default Button;
