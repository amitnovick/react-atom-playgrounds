import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';

///////////////// COMPONENT  /////////////////////

export const App = () => {
  return (
    <div>
      <h2>Button Smasher</h2>
      <p>Check your browser's web console for updates!</p>
      <Button />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root1'));

if (module.hot) {
  module.hot.accept();
}
