import styles from '../styles/pages/Index.module.css';
import { MdKeyboardArrowUp } from 'react-icons/md'
import router from 'next/router';

export default function IndexBox() {
   function handleScroll() {
      window.scroll({
         top: 0,
         left: 0,
         behavior: 'smooth',
      });
   }

   function handleRouter() {
      router.push('/login');
   }

   return (
      <>
         <div className={styles.container1}>
            <div className={styles.leftContainer}>
            </div>

            <div className={styles.rightContainer}>
               <img src="/logo-full.svg" alt="Move.it Logo"/>
               <strong>
                  Faça como milhares de outros usuários que decidiram mudar suas vidas
               </strong>
               <p>100% grátis e sem progragandas</p>
               <button onClick={handleRouter}>Quero participar!</button>
            </div>
         </div>
         
         <div className={styles.container1}>
            <div className={styles.leftContainer2}>
               <h1>Afinal,<br/> O que é Move.it?</h1>
               <span>
                  O Move.it foi criado com o objetivo de ajudar pessoas que 
                  precisam usar computadores por tempos prolongados.
               </span>
               <p>
                  através dos fundamentos da técnica pomodoro promovemos
                  séries de exercícios para o corpo e para os olhos para 
                  evitar problemas futuros de saúde.
               </p>
            </div>

            <div className={styles.rightContainer2}>
            </div>
         </div>

         <div className={styles.container2}>
            <div className={styles.leftContainer3}>
               <h2>Mova-se com a gente</h2>
            </div>

            <div className={styles.rightContainer3}>
               <button onClick={handleRouter}>Quero participar!</button>
            </div>
         </div>

         <footer className={styles.Footer}>
            <div className={styles.leftFooterContainer}>
               <img width="200" src="/logo-full.svg" alt="Move.it Logo"/>
            </div>

            <div className={styles.rightFooterContainer}>
               <p>Direitos autorais</p>
               <p>Termos de uso</p>
               <p>Politicas de privacidade</p>
               <button onClick={handleScroll}><MdKeyboardArrowUp color="#fff"/></button>
            </div>
         </footer>
      </>
   );
}