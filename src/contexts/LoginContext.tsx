import Cookies from 'js-cookie';
import {createContext, ReactNode, useCallback, useEffect, useRef, useState} from 'react';

interface LoginContextData {
   githubUsername: string;
   setGithubName: (username: string) => void;
}

interface LoginProviderProps {
   children: ReactNode;
   githubUsername: string;
}

export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({ children, ...rest } : LoginProviderProps) {

   const useStateWithPromise = (initialState) => {
      const [state, setState] = useState(initialState ?? "");
      const resolverRef = useRef(null);
    
      useEffect(() => {
         if (resolverRef.current) {
            resolverRef.current(state);
            resolverRef.current = null;
         }
      }, [resolverRef.current, state]);
    
      const handleSetState = useCallback((stateAction) => {
        setState(stateAction);
        return new Promise(resolve => {
          resolverRef.current = resolve;
        });
      }, [setState])
    
      return [state, handleSetState];
   };

   const [githubUsername, setGithubName] = useStateWithPromise(rest.githubUsername);

   useEffect(() => {
      Cookies.set('githubUsername', String(githubUsername));
   }, [githubUsername])

   return (
      <LoginContext.Provider value={{
         githubUsername,
         setGithubName
      }}>
         {children}
      </LoginContext.Provider>
   );
}