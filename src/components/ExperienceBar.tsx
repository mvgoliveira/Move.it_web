import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export default function ExperienceBar() {
   const { currentExperience, expirienceToNextLevel } = useContext(ChallengesContext);

   const porcentToNextLevel = Math.round((currentExperience * 100) / expirienceToNextLevel);

   return (
      <header className={styles.experienceBar}>
         <span>0 xp</span>
         <div>
            <div style={{ width: `${porcentToNextLevel}%` }} />

            <span className={styles.currentExperience} style={{ left: `${porcentToNextLevel}%` }}>
               {currentExperience} xp
            </span>
         </div>
         <span>{expirienceToNextLevel} xp</span>
      </header>
   );
}