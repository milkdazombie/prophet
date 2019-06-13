export interface Character {
    id: string;
    name: string;
    isNPC: boolean;
    description: string;
}

export interface CharactersState {
    characters: Character[];
    selectedCharacter?: Character;
}

export const ADD_CHARACTER = "@characters/ADD";
export const REMOVE_CHARACTER = "@characters/REMOVE";
export const EDIT_CHARACTER = "@characters/EDIT";
export const CLEAR_CHARACTERS = "@characters/CLEAR";
export const SELECT_CHARACTER = "@characters/SELECT";
