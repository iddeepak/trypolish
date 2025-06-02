import { createContext, useContext, useState } from 'react';

const ModeContext = createContext();

/**
 * ModeProvider wraps your app and provides a “mode” value ('simple' or 'funny').
 */
export function ModeProvider({ children }) {
  const [mode, setMode] = useState('simple');
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

/**
 * useMode() is a custom hook to read/update the current mode.
 */
export function useMode() {
  return useContext(ModeContext);
}
