import { memo } from "react";


export const UserCard = memo(({ user })  => {
  // console.log('UserCard rendered:', user.login);
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid #ddd', marginBottom: '8px' }}>
      <img src={user.avatar_url} alt={user.login} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      <span>{user.login}</span>
    </div>
  );
})


// const displayedUsers = useMemo(() => {
//   if (users.length === 0) return [];
  
//   return users.slice(0, 5);
// }, [users]);


// const fetchTopRepos = useCallback(() => {
//   console.log('fetchTopRepos function created');
//   return fetch('https://api.github.com/search/repositories?q=stars:>50000&sort=stars&per_page=5')
//     .then(res => res.json())
//     .then(data => data.items || []);
// }, []);