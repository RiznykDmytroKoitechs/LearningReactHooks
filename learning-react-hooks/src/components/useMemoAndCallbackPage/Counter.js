import React from 'react';

export default React.memo(
    function Counter({counter}) {
      return (
        <div>
          <p>You have clicked {counter} times</p>
        </div>
      );
    },
);
