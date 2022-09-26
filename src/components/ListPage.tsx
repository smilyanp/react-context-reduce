import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const ListPage = () => {
    const data = useContext(AppContext)

    return (<div>
        <ul>
            {data.map(item => (
                <li key={item.id}><Link to={`/item/${item.id}`}>Name: {item.name}</Link></li>
            ))}
        </ul>
    </div>)
}