import React, {createContext,useContext,useState} from 'react';
import { orderData, productData } from '../data/data';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
  
    const [activeMenu, setActiveMenu]= useState(true);
    const [screenSize, setScreenSize]= useState(undefined);
    const [rows, setRows] = useState(orderData);
    const [prows, setProws] = useState(productData);

    return (
        <StateContext.Provider 
            value={{activeMenu, setActiveMenu, screenSize, setScreenSize, rows, setRows, prows, setProws}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () =>useContext(StateContext);