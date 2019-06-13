import React from "react";
import { Thread } from "./ThreadsTypes";

export interface ThreadListItemProps {
    thread: Thread;
    viewThread: (id: string) => void;
}

export const ThreadListItem: React.FC<ThreadListItemProps> = (props) => {
    return (
        <button
            className="list-group-item list-group-item-action py-2 border-bottom rounded-0 
        d-flex align-items-center justify-content-between"
            onClick={() => props.viewThread(props.thread.id)}>
            <span className="font-weight-bold">{props.thread.name}</span>
        </button>
    );
};
