import { Atom, useAtom, swap, deref } from '@dbeining/react-atom';

const clickCountAtom = Atom.of(0);

export default clickCountAtom;
