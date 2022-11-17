import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedMain, setMain] = useState(null);
  const [selectedSub, setSub] = useState(null);

  function setSelectedMain(nft) {
    setMain(nft);
  }
  function setSelectedSub(nft) {
    setSub(nft);
  }

  return (
    <AppContext.Provider
      value={{
        main: selectedMain,
        sub: selectedSub,
        setSelectedMain,
        setSelectedSub,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
