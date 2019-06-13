import { createReducer } from "typesafe-actions";
import { ThreadsActions } from "./ThreadsActions";
import {
    ADD_THREAD,
    CLEAR_THREADS,
    EDIT_THREAD,
    REMOVE_THREAD,
    SELECT_THREAD,
    ThreadsState,
} from "./ThreadsTypes";

const initialState: ThreadsState = {
    selectedThread: undefined,
    threads: [],
};

export const threadsReducer = createReducer<ThreadsState, ThreadsActions>(initialState)
    .handleAction(ADD_THREAD, (state, action) => {
        return { ...state, threads: [...state.threads, action.payload] };
    })
    .handleAction(REMOVE_THREAD, (state, action) => {
        return {
            ...state,
            threads: state.threads.filter((t) => t.id !== action.payload),
        };
    })
    .handleAction(EDIT_THREAD, (state, action) => {
        return {
            ...state,
            threads: state.threads.map((t) =>
                t.id === action.payload.id ? Object.assign({}, t, action.payload.data) : t,
            ),
        };
    })
    .handleAction(CLEAR_THREADS, (state) => {
        return { ...state, threads: [] };
    })
    .handleAction(SELECT_THREAD, (state, action) => {
        const thread = state.threads.find((t) => t.id === action.payload);
        return { ...state, selectedThread: thread };
    });
