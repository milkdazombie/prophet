import React from "react";
import ReactMarkdown from "react-markdown";
import { LogNamedMessageItem } from "../LogTypes";

export interface LogNamedMessageProps {
    item: LogNamedMessageItem;
}

export const LogNamedMessage: React.FC<LogNamedMessageProps> = (props) => {
    return (
        <li className="list-group-item py-2" key={props.item.id}>
            <span className="w-100 d-flex">
                <strong className="mr-1">
                    {props.item.name}
                    {props.item.action ? "" : ":"}
                </strong>
                <div className={`mb-0 text-break md ${props.item.action ? "md-action" : ""}`}>
                    <ReactMarkdown source={props.item.content} />
                </div>
            </span>
        </li>
    );
};
