import { ActionType, createAction } from "typesafe-actions";
import {
    ADD_CHARACTER,
    Character,
    CLEAR_CHARACTERS,
    EDIT_CHARACTER,
    REMOVE_CHARACTER,
    SELECT_CHARACTER,
} from "./CharactersTypes";

export const addCharacter = createAction(ADD_CHARACTER, (action) => {
    return (character: Character) => action(character);
});

export const removeCharacter = createAction(REMOVE_CHARACTER, (action) => {
    return (id: string) => action(id);
});

export const editCharacter = createAction(EDIT_CHARACTER, (action) => {
    return (id: string, data: Partial<Character>) => action({ id, data });
});

export const clearCharacters = createAction(CLEAR_CHARACTERS);

export const selectCharacter = createAction(SELECT_CHARACTER, (action) => {
    return (id: string) => action(id);
});

export type CharactersActions = ActionType<
    | typeof addCharacter
    | typeof removeCharacter
    | typeof editCharacter
    | typeof clearCharacters
    | typeof selectCharacter
>;
