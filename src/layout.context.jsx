import React, {useContext, useState} from 'react';

const Store = React.createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useStore = () => {
  return useContext(Store);
}

export const StoreProvider = ({children}) => {

  const [active, setActive] = useState(0);
  const [state, setState] = useState(true);

  return (
    <Store.Provider value={{active, setActive, state, setState}}>
      {children}
    </Store.Provider>
  );
};