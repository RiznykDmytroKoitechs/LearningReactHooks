import React, {useEffect, useState, useTransition} from 'react';

export default function UseTransitionPage() {
  const [jsonData, setJsonData] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(()=>{
    startTransition(async ()=>{
      let responseJsonData = await fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            responseJsonData = json;
            console.log(jsonData);
            return json;
          })
          .catch((err)=>console.log(err));
      setJsonData(responseJsonData);
      console.log(jsonData);
      console.log(responseJsonData);
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
          <li key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </li>;
        })}
      </ul>
    );
  }
}


// useState,
