import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';

///////////////// COMPONENT  /////////////////////

export const App = () => {
  return (
    <div>
      <h2>Button Smasher</h2>
      <Button />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root1'));

if (module.hot) {
  module.hot.accept();
}
