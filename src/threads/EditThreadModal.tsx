import { Field, Form, Formik, FormikValues } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { generate as generateID } from "shortid";
import { ProphetState } from "../store";
import { editThread } from "./ThreadsActions";
import { Thread } from "./ThreadsTypes";

const dispatchProps = {
    editThread,
};

export type EditThreadForm = Thread;

export type EditThreadModalProps = ModalProps &
    typeof dispatchProps & {
        thread: Thread;
        viewThread: (id: string) => void;
    };

const EditThreadModal: React.FC<EditThreadModalProps> = (props) => {
    const initialForm: EditThreadForm = props.thread;

    const onSubmit = (values: EditThreadForm) => {
        props.editThread(values.id, values);
        props.viewThread(values.id);
    };

    return (
        <Modal onHide={props.onHide} show={props.show} backdrop="static" keyboard={false}>
            <Formik<EditThreadForm> onSubmit={onSubmit} initialValues={initialForm}>
                <Form>
                    <Modal.Header>
                        <Modal.Title as="h5" className="d-flex align-items-center">
                            Editing: {props.thread.name}
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
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => props.viewThread(props.thread.id)}>
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

export const EditThreadModalC = connect(
    null,
    dispatchProps,
)(EditThreadModal);
