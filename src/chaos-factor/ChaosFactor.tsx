import React from "react";
import { connect } from "react-redux";
import { ProphetState } from "../store";
import { ChaosFactorNumberC as ChaosFactorNumber } from "./ChaosFactorNumber";
import { ChaosState } from "./ChaosTypes";

const mapStateToProps = (state: ProphetState) => {
    return { chaos: state.chaos };
};

export type ChaosFactorProps = ReturnType<typeof mapStateToProps>;

const ChaosFactor: React.FC<ChaosFactorProps> = (props) => {
    const chaosFactorNumbers = Array.from({ length: 9 }).map((_, i) => {
        return (
            <ChaosFactorNumber
                number={i + 1}
                selected={props.chaos === i + 1}
                key={i + 1}
            />
        );
    });

    return (
        <ul className="list-group list-group-horizontal w-100 chaos-scale">
            <li className="list-group-item flex-grow-1">CF</li>
            {chaosFactorNumbers}
        </ul>
    );
};

export const ChaosFactorC = connect(mapStateToProps)(ChaosFactor);
