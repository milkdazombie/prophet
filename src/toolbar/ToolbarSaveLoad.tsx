import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { ProphetState } from "../store";

const mapStateToProps = (state: ProphetState) => {
    return { state };
};

export type ToolbarSaveLoadProps = ReturnType<typeof mapStateToProps>;

const ToolbarSaveLoad: React.FC<ToolbarSaveLoadProps> = (props) => {
    const [saveName, setSaveName] = useState("My adventure");
    const [saves, setSaves] = useState<string[]>([]);

    const onSaveNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSaveName(e.target.value);
    };

    useEffect(() => {
        const saveList = Object.entries(localStorage).map((e) => {
            return e[0];
        });
        setSaves(saveList);
    });

    const saveEntries = saves.map((s) => {
        return (
            <Dropdown.Item className="d-flex align-items-center" key={s} eventKey={s}>
                <i className="fas fa-save mr-2" />
                {s}
            </Dropdown.Item>
        );
    });

    const onSave = () => {
        if (saveName.trim()) {
            const saveData = props.state;
            localStorage.setItem(saveName, JSON.stringify(saveData));
        }
    };

    const onLoad = (data: string) => {
        sessionStorage.setItem("load", data);
        window.location.reload();
    };

    const onDelete = () => {
        localStorage.removeItem(saveName);
    };

    return (
        <section
            className="h-100 w-25 text-center d-flex flex-column justify-content-center
        align-items-center overflow-auto">
            <div className="form-group">
                <label>Save and Load</label>
                <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Enter save name…"
                    value={saveName}
                    onChange={onSaveNameChange}
                />
            </div>
            <div className="btn-toolbar">
                <button className="btn btn-primary btn-sm mr-2 h-100" onClick={() => onSave()}>
                    Save
                </button>
                <Dropdown onSelect={onLoad}>
                    <Dropdown.Toggle id="load-name" size="sm" variant="secondary" className="mr-2">
                        Load
                    </Dropdown.Toggle>
                    <Dropdown.Menu>{saveEntries}</Dropdown.Menu>
                </Dropdown>
                <button className="btn btn-danger btn-sm h-100" onClick={() => onDelete()}>
                    Delete
                </button>
            </div>
        </section>
    );
};

export const ToolbarSaveLoadC = connect(mapStateToProps)(ToolbarSaveLoad);
