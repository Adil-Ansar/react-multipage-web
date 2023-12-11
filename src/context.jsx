import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
    name: "",
    image: ""
};

const AppProvider = ({ children }) => {

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Node.js Developer",
                image: "./images/hero.jpg"
            }
        });
    }

    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "Adil Ansari",
                image: "./images/about.jpg"
            }
        });
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (<AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
        {children}
    </AppContext.Provider>)
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };