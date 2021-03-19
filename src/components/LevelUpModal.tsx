import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';
import { FaTwitter } from 'react-icons/fa';

export function LevelUpModal() {
   const { level, currentExperience, challengesCompleted, closeLevelUpModal } = useContext(ChallengesContext); 

   const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.NEXT_PUBLIC_BASE_URL;

   return (
      <div className={styles.overlay}>
         <div className={styles.container}>
            <header>{ level }</header>

            <strong>Parabéns</strong>

            <p>Você alcançou um novo level 🎉.</p>

            <button type="button" onClick={closeLevelUpModal}>
               <img src="/icons/close.svg" alt="fechar modal"/>
            </button>

            <a 
               target="_blank" 
               rel="noopener noreferrer" 
               href={`https://twitter.com/intent/tweet?url=${baseUrl}?level=${level}%26challenges=${challengesCompleted}%26exp=${currentExperience}`} 
               className={styles.Link}
            >

               Compartilhar no twitter

               <FaTwitter size={24}/>

            </a>
         </div>
      </div>
   );
}