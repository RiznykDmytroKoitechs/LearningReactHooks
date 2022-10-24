import React, {useEffect, useState, useTransition} from 'react';

export default function UseTransitionPage() {
  const [jsonData, setJsonData] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(()=>{
    startTransition(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((json) => {
            setJsonData(json);
          })
          .catch((err)=>console.log(err));
    });
  }, []);

  if (isPending) {
    return (
      <p>Loading!</p>
    );
  } else {
    return (
      <ul>
        {jsonData.map(({body, id, title})=>{
          return <li key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </li>;
        })}
      </ul>
    );
  }
}
