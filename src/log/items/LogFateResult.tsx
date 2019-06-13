import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Odds } from "../../utils/fateOdds";
import { editLog } from "../LogActions";
import { LogFateResultItem } from "../LogTypes";

export interface LogFateResultForm {
    exceptional: string;
}

const dispatchProps = {
    editLog,
};

export type LogFateResultProps = typeof dispatchProps & {
    item: LogFateResultItem;
};

const LogFateResult: React.FC<LogFateResultProps> = (props) => {
    const initialFormValues: LogFateResultForm = { exceptional: props.item.exceptionalContent };
    const [editing, setEditing] = useState(false);

    const onChangeExceptionalContent = (values: LogFateResultForm) => {
        setEditing(false);
        props.editLog(props.item.id, { ...props.item, exceptionalContent: values.exceptional });
    };

    return (
        <li className="list-group-item py-2 list-group-item-primary">
            <span className="d-flex">
                <strong className="mr-1">Question:</strong>
                <i>{props.item.question}</i>
            </span>
            <span className="d-flex">
                <strong className="mr-1">Answer:</strong>
                {props.item.exceptional && "EXCEPTIONAL "}
                {props.item.answer ? "Yes." : "No."}
            </span>
            {props.item.exceptional && props.item.exceptionalContent && !editing && (
                <i>{props.item.exceptionalContent}</i>
            )}
            {props.item.exceptional && !props.item.exceptionalContent && !editing && (
                <a href="#" onClick={() => setEditing(true)}>
                    Click to edit exceptional result description
                </a>
            )}
            {props.item.exceptional && editing && (
                <Formik onSubmit={onChangeExceptionalContent} initialValues={initialFormValues}>
                    <Form>
                        <Field
                            className="form-control form-control-sm"
                            name="exceptional"
                            placeholder="Enter exceptional result message"
                        />
                    </Form>
                </Formik>
            )}
            <small className="d-flex justify-content-between mt-1">
                <span>Rolled {props.item.roll}</span>
                <span>Chaos factor was {props.item.chaosFactor}</span>
                <span>
                    Probabilities were ({props.item.probability.UpProb}–
                    {props.item.probability.Prob}–{props.item.probability.LoProb})
                </span>
                <span>Odds were {Odds[props.item.odds]}</span>
            </small>
        </li>
    );
};

export const LogFateResultC = connect(
    null,
    dispatchProps,
)(LogFateResult);
