export type InitialStateType = typeof initState;

const initState = {
    themeId: 1 as number,
}

export const themeReducer = (state: InitialStateType = initState, action: ChangeThemeIdType): InitialStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return  {...state, themeId: action.id};
        }
        default:
            return state
    }
}


type ChangeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}
export const changeThemeId = (id: number): ChangeThemeIdType => {
    return { type: 'SET_THEME_ID', id } as const
} // fix any
