import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Plrns.png" alt="Pedro Lucas"/>
      <div>
        <strong>Pedro Lucas</strong>
        <p>
          <img src="icons/level.svg" alt="Level Icon"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;
