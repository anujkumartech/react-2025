
export const UserCard = ({ user })  => {
  console.log('UserCard rendered:', user.login);
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid #ddd', marginBottom: '8px' }}>
      <img src={user.avatar_url} alt={user.login} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      <span>{user.login}</span>
    </div>
  );
}

// memo = remembering my previous detail 
// acts on a component 