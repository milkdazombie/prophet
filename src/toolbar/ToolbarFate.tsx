import { Dice } from "dice-typescript";
import { Field, Form, Formik, FormikActions } from "formik";
import React, { FormEvent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { generate as generateID } from "shortid";
import { postLog } from "../log/LogActions";
import { LogDiceResultItem, LogFateResultItem, LogItemType } from "../log/LogTypes";
import { ProphetState } from "../store";
import { FateOdds, Odds } from "../utils/fateOdds";

const mapStateToProps = (state: ProphetState) => {
    return { chaosFactor: state.chaos };
};

const dispatchProps = {
    postLog,
};

export interface ToolbarFateQuestionForm {
    question: string;
}

export interface ToolbarFateDiceForm {
    roll: string;
}

export type ToolbarFateProps = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const ToolbarFate: React.FC<ToolbarFateProps> = (props) => {
    const initialQuestionValues: ToolbarFateQuestionForm = { question: "" };
    const initialDiceValues: ToolbarFateDiceForm = { roll: "" };
    const [odds, setOdds] = useState(Odds.FiftyFifty.valueOf());
    const [ranges, setRanges] = useState(FateOdds.get(`${Odds.FiftyFifty}-${props.chaosFactor}`));

    const onSelectOdds = (e: FormEvent<HTMLSelectElement>) => {
        const target = e.target as HTMLSelectElement;
        setOdds(Number(target.value));
    };

    const rollFate = () => {
        return Math.floor(Math.random() * (100 - 1)) + 1;
    };

    const getFateSuccessChance = (bound: number) => {
        const chance = bound < 0 ? 0 : bound > 100 ? 100 : bound;
        if (chance <= 30) {
            return <strong className="text-danger">{chance}%</strong>;
        } else if (chance >= 70) {
            return <strong className="text-success">{chance}%</strong>;
        } else {
            return <strong>{chance}%</strong>;
        }
    };

    const onSubmitFateQuestion = (
        values: ToolbarFateQuestionForm,
        actions: FormikActions<ToolbarFateQuestionForm>,
    ) => {
        actions.resetForm();
        if (ranges) {
            const roll = rollFate();
            const item: LogFateResultItem = {
                answer: roll <= ranges.Prob,
                chaosFactor: props.chaosFactor,
                exceptional: roll <= ranges.UpProb || roll >= ranges.LoProb,
                exceptionalContent: "",
                id: generateID(),
                odds,
                probability: ranges,
                question: values.question,
                roll,
                sent_at: Date.now(),
                type: LogItemType.FateResult,
            };
            props.postLog(item);
        }
    };

    const onSubmitDiceRoll = (
        values: ToolbarFateDiceForm,
        actions: FormikActions<ToolbarFateDiceForm>,
    ) => {
        actions.resetForm();
        const dice = new Dice();
        const roll = dice.roll(values.roll);
        if (!roll.errors.length) {
            const item: LogDiceResultItem = {
                description: "",
                diceString: values.roll,
                id: generateID(),
                roll: roll.total,
                sent_at: Date.now(),
                type: LogItemType.DiceResult,
            };
            props.postLog(item);
        }
    };

    useEffect(() => {
        if (Odds[odds]) {
            const prob = FateOdds.get(`${odds}-${props.chaosFactor}`);
            if (prob) {
                setRanges(prob);
            }
        }
    });

    return (
        <section className="h-100 w-50 border-right overflow-auto">
            <div className="row mx-2 my-2">
                <div className="col-md-6">
                    <div className="form-group mb-2">
                        <label htmlFor="fate-odds">Odds</label>
                        <select
                            className="custom-select custom-select-sm"
                            id="fate-odds"
                            onChange={onSelectOdds}
                            value={odds}>
                            <option value={Odds.Impossible}>Impossible</option>
                            <option value={Odds.NoWay}>No way</option>
                            <option value={Odds.VeryUnlikely}>Very unlikely</option>
                            <option value={Odds.Unlikely}>Unlikely</option>
                            <option value={Odds.FiftyFifty}>50/50</option>
                            <option value={Odds.SomewhatLikely}>Somewhat likely</option>
                            <option value={Odds.Likely}>Likely</option>
                            <option value={Odds.VeryLikely}>Very likely</option>
                            <option value={Odds.NearSureThing}>Near sure thing</option>
                            <option value={Odds.ASureThing}>A sure thing</option>
                            <option value={Odds.HasToBe}>Has to be</option>
                        </select>
                    </div>
                    <div className="form-group mb-0">
                        <label className="mb-0">Probability</label>
                        {ranges && (
                            <React.Fragment>
                                <small className="d-block">
                                    Success chance: {getFateSuccessChance(ranges.Prob)}
                                </small>
                                <small className="d-block">
                                    Ranges: <span className="text-success">{ranges.UpProb}</span> –
                                    <span className="text-muted"> {ranges.Prob}</span> –{" "}
                                    <span className="text-danger">{ranges.LoProb}</span>
                                </small>
                            </React.Fragment>
                        )}
                    </div>
                </div>
                <div className="col-md-6">
                    <Formik onSubmit={onSubmitFateQuestion} initialValues={initialQuestionValues}>
                        <Form>
                            <div className="form-group mb-2">
                                <label>Fate Question</label>
                                <div className="input-group">
                                    <Field
                                        name="question"
                                        type="text"
                                        className="form-control form-control-sm font-italic"
                                        placeholder="Ask a question…"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-sm btn-primary">Ask</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                    <Formik onSubmit={onSubmitDiceRoll} initialValues={initialDiceValues}>
                        <Form>
                            <div className="form-group mb-0">
                                <label>Dice Roll</label>
                                <div className="input-group">
                                    <Field
                                        name="roll"
                                        type="text"
                                        className="form-control form-control-sm text-monospace"
                                        placeholder="Enter a dice string…"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-sm btn-primary">Roll</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </section>
    );
};

export const ToolbarFateC = connect(
    mapStateToProps,
    dispatchProps,
)(ToolbarFate);
