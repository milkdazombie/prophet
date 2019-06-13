import { ActionType, createAction } from "typesafe-actions";
import {
    ADD_THREAD,
    CLEAR_THREADS,
    EDIT_THREAD,
    REMOVE_THREAD,
    SELECT_THREAD,
    Thread,
} from "./ThreadsTypes";

export const addThread = createAction(ADD_THREAD, (action) => {
    return (thread: Thread) => action(thread);
});

export const removeThread = createAction(REMOVE_THREAD, (action) => {
    return (id: string) => action(id);
});

export const editThread = createAction(EDIT_THREAD, (action) => {
    return (id: string, data: Partial<Thread>) => action({ id, data });
});

export const clearThreads = createAction(CLEAR_THREADS);

export const selectThread = createAction(SELECT_THREAD, (action) => {
    return (id: string) => action(id);
});

export type ThreadsActions = ActionType<
    | typeof addThread
    | typeof removeThread
    | typeof editThread
    | typeof clearThreads
    | typeof selectThread
>;
