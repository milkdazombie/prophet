import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Odds } from "../../utils/fateOdds";
import { editLog } from "../LogActions";
import { LogDiceResultItem } from "../LogTypes";

export interface LogDiceResultForm {
    description: string;
}

const dispatchProps = {
    editLog,
};

export type LogDiceResultProps = typeof dispatchProps & {
    item: LogDiceResultItem;
};

const LogDiceResult: React.FC<LogDiceResultProps> = (props) => {
    const initialFormValues: LogDiceResultForm = { description: props.item.description };
    const [editing, setEditing] = useState(false);

    const onChangeDescription = (values: LogDiceResultForm) => {
        setEditing(false);
        props.editLog(props.item.id, { ...props.item, description: values.description });
    };

    return (
        <li className="list-group-item py-2 list-group-item-primary">
            <span className="d-flex">
                <strong className="mr-1">Roll:</strong>
                <i>{props.item.diceString}</i>
            </span>
            <span className="d-flex">
                <strong className="mr-1">Result:</strong>
                {props.item.roll}
            </span>
            {props.item.description && !editing && <i>{props.item.description}</i>}
            {!props.item.description && !editing && (
                <a href="#" onClick={() => setEditing(true)}>
                    Click to edit roll description
                </a>
            )}
            {editing && (
                <Formik onSubmit={onChangeDescription} initialValues={initialFormValues}>
                    <Form>
                        <Field
                            className="form-control form-control-sm"
                            name="description"
                            placeholder="Enter description"
                        />
                    </Form>
                </Formik>
            )}
        </li>
    );
};

export const LogDiceResultC = connect(
    null,
    dispatchProps,
)(LogDiceResult);
