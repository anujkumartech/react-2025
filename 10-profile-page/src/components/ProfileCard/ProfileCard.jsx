import styles from './ProfileCard.module.css';
import ProfileStats from '../ProfileStats/ProfileStats';
import SocialButton from '../SocialButton/SocialButton';
import avatar from '../../assets/avatar.jpg';

function ProfileCard({ user }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img 
          src={avatar} 
          alt={user.name} 
          className={styles.avatar} 
        />
        <div className={styles.info}>
          <h1>{user.name}</h1>
          <p>{user.title}</p>
        </div>
      </div>
      
      <p className={styles.bio}>{user.bio}</p>
      
      <ProfileStats stats={user.stats} />
      
      <div className={styles.socials}>
        {user.socials.map((social) => (
          <SocialButton 
            key={social.platform} 
            platform={social.platform} 
            url={social.url} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;


// create a css file with prefix module -> pure css definitions
// tooling vite or babel: module css -> convert style javascript objects
// React can then import them as className props
