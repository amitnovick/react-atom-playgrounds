import React from 'react';
import ReactDOM from 'react-dom';
import { Atom, useAtom, swap, deref } from '@dbeining/react-atom';
import moment from 'moment';

import Button from './Button';
import clickCountAtom from './clickCountAtom';
/////////////////////// APP STATE /////////////////////////
/**
 * An atom can be constructed with `Atom.of`.
 * The only way to get the value of an atom is with the `useAtom`
 * hook or `deref`
 */
const timeAtom = Atom.of(moment().format('hh:mm:ss'));

/////////////////////// EFFECTS /////////////////////
const timeoutReference = window.setInterval(() =>
  swap(timeAtom, state => moment().format('hh:mm:ss'))
);
///////////////// COMPONENT  /////////////////////

export const App = () => {
  const time = useAtom(timeAtom);
  const clickCount = useAtom(clickCountAtom);
  return (
    <div>
      <p>Timer: {time}</p>
      <p>Click count: {clickCount}</p>
      <Button />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
