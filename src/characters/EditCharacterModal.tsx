import { Field, Form, Formik, FormikValues } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { generate as generateID } from "shortid";
import { ProphetState } from "../store";
import { editCharacter } from "./CharactersActions";
import { Character } from "./CharactersTypes";

const dispatchProps = {
    editCharacter,
};

export type EditCharacterForm = Character;

export type EditCharacterModalProps = ModalProps &
    typeof dispatchProps & {
        character: Character;
        viewCharacter: (id: string) => void;
    };

const EditCharacterModal: React.FC<EditCharacterModalProps> = (props) => {
    const initialForm: EditCharacterForm = props.character;

    const onSubmit = (values: EditCharacterForm) => {
        props.editCharacter(values.id, values);
        props.viewCharacter(values.id);
    };

    return (
        <Modal onHide={props.onHide} show={props.show} backdrop="static" keyboard={false}>
            <Formik<EditCharacterForm> onSubmit={onSubmit} initialValues={initialForm}>
                <Form>
                    <Modal.Header>
                        <Modal.Title as="h5" className="d-flex align-items-center">
                            Editing: {props.character.name}
                            {props.character.isNPC && (
                                <span className="badge badge-secondary ml-2">NPC</span>
                            )}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label htmlFor="ec-name">Name</label>
                            <Field
                                type="text"
                                name="name"
                                id="ec-name"
                                className="form-control"
                                required={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ec-description">Description</label>
                            <Field
                                name="description"
                                id="ec-description"
                                className="form-control"
                                required={true}
                                rows="4"
                                component="textarea"
                            />
                        </div>
                        <div className="form-group form-check">
                            <Field
                                name="isNPC"
                                type="checkbox"
                                id="ec-npc"
                                className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="ec-npc">
                                Is NPC?
                            </label>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => props.viewCharacter(props.character.id)}>
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Save changes
                        </button>
                    </Modal.Footer>
                </Form>
            </Formik>
        </Modal>
    );
};

export const EditCharacterModalC = connect(
    null,
    dispatchProps,
)(EditCharacterModal);
