import { CLOSE_DROPDOWNS, OPEN_SETTINGS } from "../actions/constants"

export const initialState = {

    profileOpen: false,
    settingsOpen: false
}

type TItemPageReducerState = {
    profileOpen: boolean
    settingsOpen: boolean
}

type TItemPageReducerAction = {
    name: string,
    payload?: any
}

export const itemPageReducer = (state: TItemPageReducerState, action: TItemPageReducerAction) => {

    switch(action.name) {
        case CLOSE_DROPDOWNS:
            return {
                ...state,
                profileOpen: false,
                settingsOpen: false
            }
        case OPEN_SETTINGS:
            return {
                ...state,
                profileOpen: false,
                settingsOpen: true
            }
        case 'OPEN_PROFILE':
            return {
                ...state,
                profileOpen: true,
                settingsOpen: false
            }
    }

    return state
}