import { ActionType, createAction } from "typesafe-actions";
import {
    CLEAR_LOG,
    DELETE_LOG,
    EDIT_LOG,
    LogInputMode,
    LogItem,
    POST_LOG,
    SET_INPUT_MODE,
} from "./LogTypes";

// postLog represents a Redux action creator for posting new items to the log
export const postLog = createAction(POST_LOG, (action) => {
    return (item: LogItem) => action(item);
});

// deleteLog represents a Redux action creator for deleting a log item from the log
export const deleteLog = createAction(DELETE_LOG, (action) => {
    return (id: string) => action(id);
});

// clearLog represents a Redux action creator for clearing all log items from the log
export const clearLog = createAction(CLEAR_LOG);

export const setInputMode = createAction(SET_INPUT_MODE, (action) => {
    return (mode: LogInputMode) => action(mode);
});

export const editLog = createAction(EDIT_LOG, (action) => {
    return (id: string, item: LogItem) => action({ id, item });
});

export type LogActions = ActionType<
    typeof postLog | typeof deleteLog | typeof clearLog | typeof setInputMode | typeof editLog
>;
