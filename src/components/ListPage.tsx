import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const ListPage = () => {
    const { state, dispatch } = useContext(AppContext)

    useEffect(() => {
        dispatch({ name: 'UPDATE_DATA', payload})
    })

    return (<div>
        <ul>
            {state.map(item => (
                <li key={item.id}><Link to={`/item/${item.id}`}>Name: {item.name}</Link></li>
            ))}
        </ul>
    </div>)
}