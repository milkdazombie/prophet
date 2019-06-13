import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";
import { ProphetState } from "../store";
import { Odds } from "../utils/fateOdds";
import { LogDiceResultC as LogDiceResult } from "./items/LogDiceResult";
import { LogFateResultC as LogFateResult } from "./items/LogFateResult";
import { LogMessage } from "./items/LogMessage";
import { LogNamedMessage } from "./items/LogNamedMessage";
import { LogBaseItem, LogItemType } from "./LogTypes";

const mapStateToProps = (state: ProphetState) => ({
    items: state.log.items,
});

export type LogContentProps = ReturnType<typeof mapStateToProps>;

const LogContent: React.FC<LogContentProps> = (props) => {
    const listRef = useRef<HTMLUListElement>(null);

    // Update log scroll position when new item is added
    useEffect(() => {
        const el = listRef.current;
        if (el && el.lastChild) {
            const lastChild = el.lastChild as HTMLLIElement;
            lastChild.scrollIntoView(false);
        }
    });

    // Render the log items
    const renderedItems = props.items.map((item) => {
        switch (item.type) {
            case LogItemType.Message:
                return <LogMessage item={item} key={item.id} />;
            case LogItemType.NamedMessage:
                return <LogNamedMessage item={item} key={item.id} />;
            case LogItemType.FateResult:
                return <LogFateResult item={item} key={item.id} />;
            case LogItemType.DiceResult:
                return <LogDiceResult item={item} key={item.id} />;
        }
    });

    return (
        <ul className="list-group list-group-flush h-100 overflow-auto log" ref={listRef}>
            {renderedItems}
        </ul>
    );
};

export const LogContentC = connect(mapStateToProps)(LogContent);
