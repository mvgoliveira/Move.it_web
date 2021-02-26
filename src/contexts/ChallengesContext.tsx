import { createContext, useState, ReactNode, useEffect } from 'react';

import challenges from '../../challenges.json';

interface Challenge {
   type: 'body' | 'eye';
   description: string;
   amount: number;
}


interface ChallengesContextData {
   level: number;
   currentExperience: number; 
   challengesCompleted: number; 
   activeChallenge: Challenge;
   expirienceToNextLevel: number;
   levelUp: () => void;
   startNewChallenge: () => void;
   resetChallenge: () => void;
   completChallenge: () => void;
} 

interface ChallengesProviderProps {
   children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData );

export function ChallengesProvider({ children } : ChallengesProviderProps) {
   const [level, setLevel] = useState(1);
   const [currentExperience, setCurrentExperience] = useState(0);
   const [challengesCompleted, setChallengesCompleted] = useState(0);

   const [activeChallenge, setActiveChallenge] = useState(null);

   const expirienceToNextLevel = Math.pow((level + 1) * 4, 2);

   useEffect(() => {
      Notification.requestPermission();
   }, [])
  
   function levelUp() {
      setLevel(level+1);
   }

   function startNewChallenge() {
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
      const challenge = challenges[randomChallengeIndex];

      setActiveChallenge(challenge);

      new Audio('/notification.mp3').play();

      if (Notification.permission === 'granted') {
         new Notification('Novo desafio 🎉', {
            body: `Valendo ${challenge.amount}xp!`
         })
      }
   }

   function resetChallenge() {
      setActiveChallenge(null);
   }

   function completChallenge() {
      if(!activeChallenge) {
         return;
      }

      const { amount } = activeChallenge;

      let finalExperience = currentExperience + amount;

      if (finalExperience >= expirienceToNextLevel) {
         finalExperience = finalExperience - expirienceToNextLevel;
         levelUp();
      }

      setCurrentExperience(finalExperience);
      setActiveChallenge(null);
      setChallengesCompleted(challengesCompleted + 1);
   }
   
   return (
      <ChallengesContext.Provider 
         value={{ 
            level, 
            currentExperience, 
            challengesCompleted,
            activeChallenge,
            expirienceToNextLevel, 
            levelUp,
            startNewChallenge,
            resetChallenge,
            completChallenge
         }}
      >

         {children}

      </ChallengesContext.Provider>
   )
}

