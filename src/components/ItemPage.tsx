import { useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import { AppContext } from "../context/AppContext";

export const ItemPage = () => {
    const [item, setItem] = useState({
        name: '',
        id: ''
    })
    const data = useContext(AppContext)
    const params = useParams();

    useEffect(() => {
        const myItem = data.find(item => item.id + '' === params.id)

        if (myItem) {
            setItem(myItem)
        }
    }, [data, params])

    return (
        <div>
            <h1>A list item - {item.name} - {item.id}</h1>
            <p>More details here</p>
        </div>
    )
}