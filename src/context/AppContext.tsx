import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext<any[]>([])

export const AppContextProvider = (props: any) => {
    const [ data, setData ] = useState<any[]>([])

    useEffect(() => {
        // API CALL
        setData([
            { name: 'Smith', age: 10, id: 1 },
            { name: 'James', age: 15, id: 2 },
            { name: 'Lila', age: 12, id: 3 },
        ])
    }, [])

    return (
        <AppContext.Provider value={data}>
            {props.children}
        </AppContext.Provider>
    )
}
