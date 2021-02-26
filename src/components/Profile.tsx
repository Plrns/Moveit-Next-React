import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Plrns.png" alt="Pedro Lucas"/>
      <div>
        <strong>Pedro Lucas</strong>
        <p>
          <img src="icons/level.svg" alt="Level Icon"/>
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;
