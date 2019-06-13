import { Field, Form, Formik, FormikActions } from "formik";
import React, { useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { connect, MapDispatchToProps } from "react-redux";
import { Dispatch } from "redux";
import { generate as generateID } from "shortid";
import { Character } from "../characters/CharactersTypes";
import { ProphetState } from "../store";
import { LogActions, postLog, setInputMode } from "./LogActions";
import { LogBaseItem, LogItem, LogItemType, LogMessageItem, LogNamedMessageItem } from "./LogTypes";

const dispatchProps = {
    postLog,
    setInputMode,
};

const mapStateToProps = (state: ProphetState) => {
    return {
        characters: state.characters.characters,
        inputMode: state.log.inputMode,
    };
};

export interface FooterPostForm {
    content: string;
}

export type LogFooterProps = typeof dispatchProps & ReturnType<typeof mapStateToProps>;

const LogFooter: React.FC<LogFooterProps> = (props) => {
    const inputRef = useRef<HTMLInputElement>();

    const getInputCharacter = () => {
        if (props.inputMode.type === "character" && props.inputMode.characterId) {
            return props.characters.find((c) => c.id === props.inputMode.characterId);
        } else {
            return undefined;
        }
    };

    const onSubmit = (values: FooterPostForm, actions: FormikActions<FooterPostForm>) => {
        // Clear the data in the current form
        actions.resetForm();

        // Post the new log
        let item;
        const meta = {
            id: generateID(),
            sent_at: Date.now(),
        };

        const character = getInputCharacter();
        if (character) {
            item = {
                ...meta,
                action: values.content.startsWith("*"),
                content: values.content,
                name: character.name,
                type: LogItemType.NamedMessage,
            } as LogNamedMessageItem;
        } else {
            item = {
                ...meta,
                content: values.content,
                type: LogItemType.Message,
            } as LogMessageItem;
        }
        props.postLog(item);
    };

    const onChangeInputMode = (item: string) => {
        if (item === "narration") {
            props.setInputMode({ type: "narration", characterId: "" });
        } else {
            const character = JSON.parse(item) as Character;
            props.setInputMode({ type: "character", characterId: character.id });
        }
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const getInputModeLabel = () => {
        const character = getInputCharacter();
        if (character) {
            return <strong>{character.name}</strong>;
        } else {
            return "Narration";
        }
    };

    const dropdownCharacters = props.characters.map((c) => {
        return (
            <Dropdown.Item
                className="d-flex align-items-center"
                key={c.id}
                eventKey={JSON.stringify(c)}>
                <i className="fas fa-user mr-2" />
                {c.name}
            </Dropdown.Item>
        );
    });

    return (
        <div className="card-footer">
            <Formik<FooterPostForm> initialValues={{ content: "" }} onSubmit={onSubmit}>
                <Form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <Dropdown onSelect={onChangeInputMode}>
                                <Dropdown.Toggle id="log-character" size="sm" variant="secondary">
                                    {getInputModeLabel()}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        className="d-flex 
                                    align-items-center font-weight-bold"
                                        eventKey="narration">
                                        <i className="fas fa-feather mr-2" />
                                        Narration
                                    </Dropdown.Item>
                                    <Dropdown.Divider className="my-1" />
                                    {dropdownCharacters}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Field
                            type="text"
                            name="content"
                            placeholder="Type something to add to the log…"
                            className="form-control form-control-sm"
                            innerRef={inputRef}
                        />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-sm btn-primary">
                                Post
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

// Export the Redux-connected component
export const LogFooterC = connect(
    mapStateToProps,
    dispatchProps,
)(LogFooter);
