import axios from "axios";
import { createContext, useState } from "react";
export const globalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    const [mode, setMode] = useState(false)

    const [data, setData] = useState([])

    axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => {
        setData(data)
    })

    const values = {
        mode,
        setMode,
        data,
    }

    return (
        <globalContext.Provider value={values}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalContextProvider