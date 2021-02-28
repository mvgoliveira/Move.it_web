import { useContext, useEffect, useState } from 'react';

import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

   const { 
      minutes, 
      seconds,
      initialTime,
      hasFinished, 
      isActive, 
      startCountdown, 
      resetCountdown 
   } = useContext(CountdownContext)

   const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
   const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

   const [percentProgressTimer, setPercentProgressTimer] = useState(0);

   useEffect(() => {
      const percentToEndTimer = 100 - Math.round( ((((minutes * 60) + seconds)*100) / initialTime));
      
      if (percentToEndTimer >= 0 && percentToEndTimer <= 100) {
         setPercentProgressTimer(percentToEndTimer);
      }
   }, [minutes, seconds])
   
   return (
      <div>
         <div className={styles.CountdownContainer}>
            <div>
               <span>{minuteLeft}</span>
               <span>{minuteRight}</span>
            </div>
               <span>:</span>
            <div>
               <span>{secondsLeft}</span>
               <span>{secondsRight}</span>
            </div>
         </div>

         { hasFinished ? (
            <>
               <button disabled className={`${styles.countdownButton}` }> 
                  Ciclo encerrado
                  <img src="icons/check_circle.svg" alt="correto"/>
               </button>
               <div className={styles.progressLine}>
                  <div style={{ width: `100%` }}></div>
               </div>
            </>
            

         ) : (
            <>
               { isActive ? (
                  <>
                     <button 
                        type="button" 
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}` } 
                        onClick={resetCountdown}
                     > 
                        Abandonar ciclo

                     </button>
                     <div className={styles.progressLine}>
                        <div style={{ width: `${percentProgressTimer}%` }}></div>
                     </div>
                  </>
               ) : (

                  <button 
                     type="button" 
                     className={styles.countdownButton} 
                     onClick={startCountdown}
                  > 
                     Iniciar um ciclo

                  </button> 
               )}
            </>
         )}

         

      </div>


   );
}