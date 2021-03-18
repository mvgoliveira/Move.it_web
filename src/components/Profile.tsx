import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useSession } from 'next-auth/client';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
   const { level } = useContext(ChallengesContext);
   const [session, loading] = useSession();

   return (
      <div className={styles.profileContainer}>
         <img src={session.user.image} alt="Profile image"/>

         <div>
            <strong>{session.user.name}</strong>
            <p>
               <img src="icons/level.svg" alt="Level"/>
               Level { level }
            </p>
         </div>
      </div>
   );
}