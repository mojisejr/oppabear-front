import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedMain, setMain] = useState(null);
  const [selectedSub, setSub] = useState(null);

  function setSelectedMain(nft) {
    console.log("set main to be", nft);
    setMain(nft);
  }
  function setSelectedSub(nft) {
    console.log("set sub to be", nft);
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
