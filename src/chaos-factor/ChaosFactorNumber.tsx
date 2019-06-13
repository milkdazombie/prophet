import React from "react";
import { connect } from "react-redux";
import { setChaos } from "./ChaosActions";

const dispatchProps = {
    setChaos,
};

export type ChaosFactorNumberProps = typeof dispatchProps & {
    number: number;
    selected: boolean;
};

const ChaosFactorNumber: React.FC<ChaosFactorNumberProps> = (props) => {
    const elClass = `list-group-item list-group-item-action flex-grow-1 text-center
    chaos-${props.number} ${props.selected && "list-group-item-secondary"}`;

    return (
        <button
            className={elClass}
            onClick={() => props.setChaos(props.number)}>
            {props.number}
        </button>
    );
};

export const ChaosFactorNumberC = connect(
    null,
    dispatchProps,
)(ChaosFactorNumber);
