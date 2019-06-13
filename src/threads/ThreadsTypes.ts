export interface Thread {
    id: string;
    name: string;
    description: string;
}

export interface ThreadsState {
    threads: Thread[];
    selectedThread?: Thread;
}

export const ADD_THREAD = "@threads/ADD";
export const REMOVE_THREAD = "@threads/REMOVE";
export const EDIT_THREAD = "@threads/EDIT";
export const CLEAR_THREADS = "@threads/CLEAR";
export const SELECT_THREAD = "@threads/SELECT";
