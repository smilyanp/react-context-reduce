import { useContext, useEffect, useReducer, useState} from 'react';
import { useParams } from 'react-router-dom'
import { AppContext } from "../context/AppContext";
import * as actions from '../actions/itemPageActions';
import { initialState, itemPageReducer } from '../reducers/itemPageReducer';
import { OPEN_SETTINGS } from '../actions/constants';

export const ItemPage = () => {
    const [state, dispatch] = useReducer(itemPageReducer, initialState)

    const [age, setAge] = useState(0)
    const data = useContext(AppContext)
    const params = useParams();

    const handleClickOutsideDropdown = () => {
        dispatch(actions.closeDropdowns())
    }
    const closeProfileAndOpenSettings = () => {
        if (state.profileOpen) {
            dispatch({ name: OPEN_SETTINGS })
        }
    }
    const closeSettingsAndOpenProfile = () => {
        if (state.settingsOpen) {
            dispatch({ name: 'OPEN_PROFILE' })
        }
    }

    useEffect(() => {
        const myItem = data.find(item => item.id + '' === params.id)

        if (myItem) {
            // setItem(myItem)
            const action = { name: 'SET_ITEM', payload: myItem}
            const actionUpdateAge = { name: 'UPDATE_AGE', payload: 12 }
            dispatch(actionUpdateAge)
        }
    }, [data, params])

    return (
        <div>
            <h1>A list item - {item.name} - {item.id} - {state.age}</h1>
            <p>More details here</p>
        </div>
    )
}