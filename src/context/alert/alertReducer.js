import {HIDE_ALERT, SHOW_ALERT} from "../types";

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    console.log(action)
    const handler = handlers[action.type] || handlers.DEFAULT
    console.log(handler)

    return handler(state, action)
}