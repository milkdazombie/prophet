import { Field, Form, Formik, FormikValues } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { generate as generateID } from "shortid";
import { removeCharacter } from "./CharactersActions";
import { Character } from "./CharactersTypes";

const dispatchProps = {
    removeCharacter,
};

export type ViewCharacterModalProps = ModalProps &
    typeof dispatchProps & {
        character: Character;
        editCharacter: (id: string) => void;
    };

const ViewCharacterModal: React.FC<ViewCharacterModalProps> = (props) => {
    const delChar = () => {
        props.removeCharacter(props.character.id);

        if (props.onHide) {
            props.onHide();
        }
    };

    return (
        <Modal onHide={props.onHide} show={props.show}>
            <Modal.Header closeButton={true}>
                <Modal.Title as="h5" className="d-flex align-items-center">
                    Character: {props.character.name}
                    {props.character.isNPC && (
                        <span className="badge badge-secondary ml-2">NPC</span>
                    )}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="py-4">{props.character.description}</Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger" onClick={delChar}>
                    Delete
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        props.editCharacter(props.character.id);
                    }}>
                    Edit
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export const ViewCharacterModalC = connect(
    null,
    dispatchProps,
)(ViewCharacterModal);
