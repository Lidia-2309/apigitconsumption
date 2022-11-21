import React from 'react';
import { useAxios } from './hooks/useAxios';

type Repository = {
  name: string;
}

function App() {
const { data: repositories } = useAxios<Repository[]>('https://api.github.com/users/Lidia-2309/repos')

  return (
    <div className="App">
      <ul>
        {repositories?.map(repo => {
          return(
            <li key={repo.name}>
              <strong>{repo.name}</strong>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
