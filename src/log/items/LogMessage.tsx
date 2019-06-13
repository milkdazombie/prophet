import React from "react";
import { LogMessageItem } from "../LogTypes";

export interface LogMessageProps {
    item: LogMessageItem;
}

export const LogMessage: React.FC<LogMessageProps> = (props) => {
    return <li className="list-group-item py-2 font-italic text-muted">{props.item.content}</li>;
};
