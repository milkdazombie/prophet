import { createReducer } from "typesafe-actions";
import { clearLog, deleteLog, editLog, LogActions, postLog, setInputMode } from "./LogActions";
import { LogState } from "./LogTypes";

const initialState: LogState = {
    inputMode: {
        characterId: "",
        type: "narration",
    },
    items: [],
};

export const logReducer = createReducer<LogState, LogActions>(initialState)
    .handleAction(postLog, (state, action) => {
        return { ...state, items: [...state.items, action.payload] };
    })
    .handleAction(deleteLog, (state, action) => {
        return {
            ...state,
            items: state.items.filter((i) => i.id !== action.payload),
        };
    })
    .handleAction(clearLog, (state) => {
        return { ...state, items: [] };
    })
    .handleAction(setInputMode, (state, action) => {
        return { ...state, inputMode: action.payload };
    })
    .handleAction(editLog, (state, action) => {
        return {
            ...state,
            items: state.items.map((i) => {
                if (i.id === action.payload.id) {
                    return action.payload.item;
                }
                return i;
            }),
        };
    });
