import React from 'react';

export default React.memo(function DivisionCheckDisplay({canBeDivided}) {
  if (canBeDivided) {
    return (<p>Can be divided by 3!</p>);
  } else {
    return (<p>Cannot be divided by 3!</p>);
  }
});
