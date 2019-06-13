import { Field, Form, Formik, FormikValues } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { generate as generateID } from "shortid";
import { removeThread } from "./ThreadsActions";
import { Thread } from "./ThreadsTypes";

const dispatchProps = {
    removeThread,
};

export type ViewThreadModalProps = ModalProps &
    typeof dispatchProps & {
        thread: Thread;
        editThread: (id: string) => void;
    };

const EditThreadModal: React.FC<ViewThreadModalProps> = (props) => {
    const delThread = () => {
        props.removeThread(props.thread.id);

        if (props.onHide) {
            props.onHide();
        }
    };

    return (
        <Modal onHide={props.onHide} show={props.show}>
            <Modal.Header closeButton={true}>
                <Modal.Title as="h5" className="d-flex align-items-center">
                    Thread: {props.thread.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="py-4">{props.thread.description}</Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger" onClick={delThread}>
                    Delete
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        props.editThread(props.thread.id);
                    }}>
                    Edit
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export const ViewThreadModalC = connect(
    null,
    dispatchProps,
)(EditThreadModal);
