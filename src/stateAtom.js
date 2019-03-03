import { Atom, addChangeHandler } from '@dbeining/react-atom';
import moment from 'moment';

const stateAtom = Atom.of({ clickCount: 0, time: moment().format('hh:mm:ss') });

addChangeHandler(stateAtom, 'debugging', ({ current, previous }) => {
  const action = new Error().stack
    .split('\n')[6]
    .replace(/^\s+at\s+Atom\./, '');
  console.group(
    `%c Portal State Change %c ${new Date().toLocaleTimeString()}`,
    'color: gray; font-weight: lighter;',
    'color: black; font-weight: bold;'
  );
  console.log('%c Previous', `color: #9E9E9E; font-weight: bold`, previous);
  console.log('%c Action', `color: #03A9F4; font-weight: bold`, action);
  console.log('%c Next', `color: #4CAF50; font-weight: bold`, current);
  console.groupEnd();
});

export default stateAtom;
