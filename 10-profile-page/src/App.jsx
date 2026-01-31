import styles from './App.module.css';
import ProfileCard from './components/ProfileCard/ProfileCard';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  text-align: center;
  color: green;
`;

function App() {
  const user = {
    name: 'Sarah Chen',
    title: 'Frontend Developer',
    bio: 'Building beautiful interfaces with React. Coffee enthusiast and open source contributor.',
    avatar: '/avatar.jpg',
    stats: {
      posts: 42,
      followers: 1200,
      following: 890
    },
    socials: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'github', url: 'https://github.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' }
    ]
  };

  return (
    <>
      <h1 style={{color: 'red', textAlign: 'center'}}> Profile Page</h1>
      <h1 style={{color: 'green', textAlign: 'center'}}> Sub Heading</h1> 

      <StyledHeader>Profile Page</StyledHeader>
      <StyledHeader>Sub Heading</StyledHeader>

      <div className={styles.container}>
        <ProfileCard user={user} />
      </div>
    </>

  );
}

export default App;

// inline style
// css modules
// styled component
