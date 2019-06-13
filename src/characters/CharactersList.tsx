import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ProphetState } from "../store";
import { editCharacter, selectCharacter } from "./CharactersActions";
import { CharactersListItem } from "./CharactersListItem";
import { Character } from "./CharactersTypes";
import { EditCharacterModalC as EditCharacterModal } from "./EditCharacterModal";
import { ViewCharacterModalC as ViewCharacterModal } from "./ViewCharacterModal";

const dispatchProps = {
    editCharacter,
    selectCharacter,
};

const mapStateToProps = (state: ProphetState) => {
    return {
        characters: state.characters.characters,
        selectedCharacter: state.characters.selectedCharacter,
    };
};

export type CharactersListProps = typeof dispatchProps & ReturnType<typeof mapStateToProps>;

const CharactersList: React.FC<CharactersListProps> = (props) => {
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const setViewCharacter = (id: string) => {
        props.selectCharacter(id);
        setShowEditModal(false);
        setShowViewModal(true);
    };

    const setEditCharacter = (id: string) => {
        props.selectCharacter(id);
        setShowViewModal(false);
        setShowEditModal(true);
    };

    // Render characters
    const characters = props.characters.map((c) => {
        return <CharactersListItem key={c.id} character={c} viewCharacter={setViewCharacter} />;
    });

    return (
        <React.Fragment>
            {props.selectedCharacter && (
                <React.Fragment>
                    <ViewCharacterModal
                        character={props.selectedCharacter}
                        onHide={() => setShowViewModal(false)}
                        show={showViewModal}
                        editCharacter={setEditCharacter}
                    />
                    <EditCharacterModal
                        character={props.selectedCharacter}
                        show={showEditModal}
                        viewCharacter={setViewCharacter}
                    />
                </React.Fragment>
            )}
            <ul className="list-group list-group-flush">{characters}</ul>
        </React.Fragment>
    );
};

export const CharactersListC = connect(
    mapStateToProps,
    dispatchProps,
)(CharactersList);
