import { Character } from "../characters/CharactersTypes";
import { Odds, OddsProbability } from "../utils/fateOdds";

export interface LogState {
    items: LogItem[];
    inputMode: LogInputMode;
}

export interface LogInputMode {
    type: "narration" | "character";
    characterId: string;
}

export enum LogItemType {
    Message,
    NamedMessage,
    FateResult,
    DiceResult,
    Divider,
}

export interface LogBaseItem {
    id: string;
    type: LogItemType;
    sent_at: number;
}

export interface LogMessageItem extends LogBaseItem {
    type: LogItemType.Message;
    content: string;
}

export interface LogNamedMessageItem extends LogBaseItem {
    type: LogItemType.NamedMessage;
    name: string;
    content: string;
    action: boolean;
}

export interface LogFateResultItem extends LogBaseItem {
    type: LogItemType.FateResult;
    question: string;
    answer: boolean;
    exceptional: boolean;
    exceptionalContent: string;
    roll: number;
    probability: OddsProbability;
    odds: Odds;
    chaosFactor: number;
}

export interface LogDiceResultItem extends LogBaseItem {
    type: LogItemType.DiceResult;
    description: string;
    diceString: string;
    roll: number;
}

export interface LogDividerItem extends LogBaseItem {
    type: LogItemType.Divider;
    title: string;
}

export type LogItem =
    | LogMessageItem
    | LogNamedMessageItem
    | LogFateResultItem
    | LogDiceResultItem
    | LogDividerItem;

export const POST_LOG = "@log/POST";
export const DELETE_LOG = "@log/DELETE";
export const CLEAR_LOG = "@log/CLEAR";
export const EDIT_LOG = "@log/EDIT";
export const SET_INPUT_MODE = "@log/INPUT_MODE";
