import React from 'react';

export default React.memo(function IncrementButton({incrementFunction}) {
  return (
    <button onClick={() => incrementFunction()}>
            Click to increment
    </button>
  );
});
