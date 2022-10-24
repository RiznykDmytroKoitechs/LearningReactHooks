import React from 'react';
import {Link} from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <p><Link to={'/effect'}>useState + useEffect</Link></p>
      <p><Link to={'/context'}>useContext + useReducer</Link></p>
      <p><Link to={'/memo'}>useMemo + useCallback</Link></p>
      <p><Link to={'/ref'}>useRef</Link></p>
      <p><Link to={'/layout'}>useLayoutEffect</Link></p>
      <p><Link to={'/debug'}>useDebugValue</Link></p>
      <p><Link to={'/transition'}>useTransition</Link></p>
    </div>
  );
}
