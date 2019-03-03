import React from 'react';
import ReactDOM from 'react-dom';
import {
  Atom,
  useAtom,
  swap,
  deref,
  addChangeHandler
} from '@dbeining/react-atom';
import moment from 'moment';

import Button from './Button';
import stateAtom from './stateAtom';

/////////////////////// EFFECTS /////////////////////
// const dateTimeoutReference = window.setInterval(
//   () =>
//     swap(stateAtom, state => ({ ...state, time: moment().format('hh:mm:ss') })),
//   1000
// );

///////////////// COMPONENT  /////////////////////

export const App = () => {
  return (
    <div>
      <h2>Button Smasher</h2>
      <Button />
    </div>
  );
};

// const MyDevTools = () => {
//   const state = useAtom(stateAtom);
//   return (
//     <div>
//       <p>--------- My Dev Tools: State ---------</p>
//       <p>{JSON.stringify(state)}</p>
//     </div>
//   );
// };

ReactDOM.render(<App />, document.getElementById('root1'));
// ReactDOM.render(<MyDevTools />, document.getElementById('root2'));

if (module.hot) {
  module.hot.accept();
}
