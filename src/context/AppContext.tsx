import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext<any[]>([])

export const AppContextProvider = (props: any) => {
    const [state, dispatch] = useReducer(itemPageReducer, initialState)
    // const [ data, setData ] = useState<any[]>([])

    useEffect(() => {
        // API CALL
        const payload = [
            { name: 'Smith', age: 10, id: 1 },
            { name: 'James', age: 15, id: 2 },
            { name: 'Lila', age: 12, id: 3 },
        ]
        // setData([
        //     { name: 'Smith', age: 10, id: 1 },
        //     { name: 'James', age: 15, id: 2 },
        //     { name: 'Lila', age: 12, id: 3 },
        // ])
        dispatch({ name: 'UPDATE_DATA', payload})
    }, [])

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    )
}
