import { combineReducers, createStore, Store } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { chaosReducer } from "./chaos-factor/chaosReducer";
import { charactersReducer } from "./characters/charactersReducer";
import { logReducer } from "./log/logReducer";
import { threadsReducer } from "./threads/threadsReducer";

const rootReducer = combineReducers({
    chaos: chaosReducer,
    characters: charactersReducer,
    log: logReducer,
    threads: threadsReducer,
});

let initialState = {};
if (sessionStorage.getItem("load")) {
    const saveData = localStorage.getItem(sessionStorage.getItem("load")!);
    if (saveData) {
        initialState = JSON.parse(saveData);
    }
}

export const store: Store = createStore(rootReducer, initialState, devToolsEnhancer({}));

export type ProphetState = ReturnType<typeof rootReducer>;
