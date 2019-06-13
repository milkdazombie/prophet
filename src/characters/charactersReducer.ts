import { createReducer } from "typesafe-actions";
import { CharactersActions } from "./CharactersActions";
import {
    ADD_CHARACTER,
    CharactersState,
    CLEAR_CHARACTERS,
    EDIT_CHARACTER,
    REMOVE_CHARACTER,
    SELECT_CHARACTER,
} from "./CharactersTypes";

const initialState: CharactersState = {
    characters: [],
    selectedCharacter: undefined,
};

export const charactersReducer = createReducer<CharactersState, CharactersActions>(initialState)
    .handleAction(ADD_CHARACTER, (state, action) => {
        return { ...state, characters: [...state.characters, action.payload] };
    })
    .handleAction(REMOVE_CHARACTER, (state, action) => {
        return {
            ...state,
            characters: state.characters.filter((c) => c.id !== action.payload),
        };
    })
    .handleAction(EDIT_CHARACTER, (state, action) => {
        return {
            ...state,
            characters: state.characters.map((c) =>
                c.id === action.payload.id ? Object.assign({}, c, action.payload.data) : c,
            ),
        };
    })
    .handleAction(CLEAR_CHARACTERS, (state) => {
        return { ...state, characters: [] };
    })
    .handleAction(SELECT_CHARACTER, (state, action) => {
        const character = state.characters.find((c) => c.id === action.payload);
        return { ...state, selectedCharacter: character };
    });
