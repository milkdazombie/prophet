import { Field, Form, Formik, FormikValues } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { generate as generateID } from "shortid";
import { addCharacter } from "./CharactersActions";

const dispatchProps = {
    addCharacter,
};

export type AddCharacterModalProps = ModalProps & typeof dispatchProps;

export interface AddCharacterForm {
    name: string;
    isNPC: boolean;
}

const AddCharacterModal: React.FC<AddCharacterModalProps> = (props) => {
    const initialForm: AddCharacterForm = {
        isNPC: false,
        name: "",
    };

    const onSubmit = (values: AddCharacterForm) => {
        props.addCharacter({
            description: "",
            id: generateID(),
            isNPC: values.isNPC,
            name: values.name,
        });

        if (props.onHide) {
            props.onHide();
        }
    };

    return (
        <Modal onHide={props.onHide} show={props.show}>
            <Formik<AddCharacterForm>
                onSubmit={onSubmit}
                initialValues={initialForm}>
                <Form>
                    <Modal.Header closeButton={true}>
                        <Modal.Title as="h5">Add a new character</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label htmlFor="ac-name">Name</label>
                            <Field
                                type="text"
                                name="name"
                                id="ac-name"
                                className="form-control"
                                required={true}
                            />
                        </div>
                        <div className="form-group form-check">
                            <Field
                                name="isNPC"
                                type="checkbox"
                                id="ac-npc"
                                className="form-check-input"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="ac-npc">
                                Is NPC?
                            </label>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit">Add character</Button>
                    </Modal.Footer>
                </Form>
            </Formik>
        </Modal>
    );
};

export const AddCharacterModalC = connect(
    null,
    dispatchProps,
)(AddCharacterModal);
