import React from 'react';
import { Atom, useAtom, swap, deref } from '@dbeining/react-atom';

import stateAtom from './stateAtom.js';

const Button = () => {
  const { clickCount } = useAtom(stateAtom);
  return (
    <div>
      <input
        type="button"
        value="Pickle me"
        style={clickCount >= 10 ? { color: 'red' } : { color: 'green' }}
        onClick={() =>
          swap(stateAtom, state => ({
            ...state,
            clickCount: state.clickCount + 1
          }))
        }
      />
      <p>Hello there</p>
    </div>
  );
};

export default Button;
