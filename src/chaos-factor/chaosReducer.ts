import { createReducer } from "typesafe-actions";
import { ChaosActions } from "./ChaosActions";
import { ChaosState, SET_CHAOS } from "./ChaosTypes";

const initialState: ChaosState = 5;

export const chaosReducer = createReducer<ChaosState, ChaosActions>(initialState).handleAction(
    SET_CHAOS,
    (state, action) => {
        return action.payload;
    },
);
