import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { ChallengesContext } from './ChallengesContext';

interface IndexProviderProps {
   children: ReactNode;
}

interface IndexContextData {

}

export const IndexContext = createContext({} as IndexContextData);

export function IndexProvider({ children } : IndexProviderProps) {
   useEffect(() => {
      
   }, [])

   return (
      <IndexContext.Provider value={{

      }}>
         {children}
      </IndexContext.Provider>
   );
}