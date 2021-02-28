import { Form } from '@unform/web';

import styles from '../styles/pages/Login.module.css';
import Input from './Input';
import { useContext, useState } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { useRouter } from 'next/router';

export function LoginBox() {
   const router = useRouter()
   
   const { setGithubName } = useContext(LoginContext);

   const [isFilled, setIsFilled] = useState(false);

   function changeInput(e : React.ChangeEvent<HTMLInputElement>) {
      if (e.target.value !== ""){
         setIsFilled(true);
         return;
      }
      setIsFilled(false);
   }

   async function handleSubmit(data: { username: string; }, { reset }) {
      await setGithubName(data.username);
      setIsFilled(false);
      reset();

      router.replace('/');
   }

   return (
      <div className={styles.container}>
         <div className={styles.leftContainer}>
         </div>

         <div className={styles.rightContainer}>
            <img src="/logo-full.svg" alt="Move.it Logo"/>
            <strong>Bem-vindo</strong>

            <div>
               <img src="/icons/github-logo.svg" alt="github Logo"/>
               <p>Faça login com seu Github para começar</p>
            </div>

            <Form onSubmit={handleSubmit}>
               <Input type="username" placeholder="Digite seu username" name="username" onChange={changeInput}/>

               { isFilled ? (
                  <button className={styles.buttonActive} type="submit">
                     <img src="/icons/arrow-right.svg" alt=""/>
                  </button>
               ) : (
                  <button disabled type="submit">
                     <img src="/icons/arrow-right.svg" alt=""/>
                  </button>
               )}    
            </Form>
         </div>
      </div>
   );
}