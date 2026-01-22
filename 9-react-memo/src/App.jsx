import { useState, useEffect, useCallback, useMemo } from 'react';

import { UserCard } from './components/UserCard_V2';

function App() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  // console.log('App rendered:');

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  // const fetchTopRepos = () => {
  //   console.log('fetchTopRepos function created');
  //   return fetch('https://api.github.com/search/repositories?q=stars:>50000&sort=stars&per_page=5')
  //     .then(res => res.json())
  //     .then(data => data.items || []);
  // };

  const fetchTopRepos = useCallback(() => {
    console.log('fetchTopRepos function created');
    return fetch('https://api.github.com/search/repositories?q=stars:>50000&sort=stars&per_page=5')
      .then(res => res.json())
      .then(data => data.items || []);
  }, []);
  
  useEffect(() => {
    console.log('fetchTopRepos changed useEffect triggered - calling API!');
    fetchTopRepos().then(repos => console.log(repos));
  }, [fetchTopRepos]);

  // useCall

  useEffect(() => {
    if (query.length < 2) {
      setUsers([]);
      return;
    }

    fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(data => setUsers(data.items || []));
  }, [query]);

  // const displayedUsers = (() => {
  //   console.log('users recalculated');
  //   if (users.length === 0) return [];

  //   return users.slice(0, 5);
  // })();

  const displayedUsers = useMemo(() => {
    // console.log('users recalculated use memo');
    if (users.length === 0) return [];

    return users.slice(0, 5);
  }, [users]);

  // useMemo: is for reducing duplicate calculation - a React Hook
  // memo: is for reducing rerenders of a component (often a child component) - a function
  // useCallback: is for reducing number of function recreation 

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>GitHub User Search</h2>

      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search users..."
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      <button onClick={() => setCount(count + 1)}>
        Clicked: {count}
      </button>

      <div style={{ marginTop: '20px' }}>
        {displayedUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;