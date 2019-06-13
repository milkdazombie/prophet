import { ActionType, createAction } from "typesafe-actions";
import { SET_CHAOS } from "./ChaosTypes";

export const setChaos = createAction(SET_CHAOS, (action) => {
    return (chaos: number) => action(chaos);
});

export type ChaosActions = ActionType<typeof setChaos>;
