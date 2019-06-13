import React from "react";
import { Character } from "./CharactersTypes";

export interface CharacterListItemProps {
    character: Character;
    viewCharacter: (id: string) => void;
}

export const CharactersListItem: React.FC<CharacterListItemProps> = (props) => {
    return (
        <button
            className="list-group-item list-group-item-action py-2 border-bottom rounded-0 
        d-flex align-items-center justify-content-between"
            onClick={() => props.viewCharacter(props.character.id)}>
            <span className="font-weight-bold">{props.character.name}</span>
            {props.character.isNPC && <span className="badge badge-secondary">NPC</span>}
        </button>
    );
};
