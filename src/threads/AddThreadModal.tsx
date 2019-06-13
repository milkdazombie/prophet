import { Field, Form, Formik, FormikValues } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { generate as generateID } from "shortid";
import { addThread } from "./ThreadsActions";

const dispatchProps = {
    addThread,
};

export type AddThreadModalProps = ModalProps & typeof dispatchProps;

export interface AddThreadForm {
    name: string;
    description: string;
}

const AddThreadModal: React.FC<AddThreadModalProps> = (props) => {
    const initialForm: AddThreadForm = {
        description: "",
        name: "",
    };

    const onSubmit = (values: AddThreadForm) => {
        props.addThread({
            description: "",
            id: generateID(),
            name: values.name,
        });

        if (props.onHide) {
            props.onHide();
        }
    };

    return (
        <Modal onHide={props.onHide} show={props.show}>
            <Formik<AddThreadForm> onSubmit={onSubmit} initialValues={initialForm}>
                <Form>
                    <Modal.Header closeButton={true}>
                        <Modal.Title as="h5">Add a new thread</Modal.Title>
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit">Add thread</Button>
                    </Modal.Footer>
                </Form>
            </Formik>
        </Modal>
    );
};

export const AddThreadModalC = connect(
    null,
    dispatchProps,
)(AddThreadModal);
