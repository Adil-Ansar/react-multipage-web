import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { data } from "./assets/data";

const AppContext = React.createContext();

// const API = "https://thapareactapi.up.railway.app";

const initialState = {
    name: "",
    image: "",
    services: []
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

    const getServices = async (url) => {
        try {
            // const res = await fetch(url);
            // const data = await res.json();
            dispatch({ type: "GET_SERVICES", payload: data });
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        // getServices(API);
        getServices()
    }, [])


    return (<AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
        {children}
    </AppContext.Provider>)
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };