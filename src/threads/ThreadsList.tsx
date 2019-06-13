import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ProphetState } from "../store";
import { EditThreadModalC as EditThreadModal } from "./EditThreadModal";
import { ThreadListItem } from "./ThreadListItem";
import { editThread, selectThread } from "./ThreadsActions";
import { Thread } from "./ThreadsTypes";
import { ViewThreadModalC as ViewThreadModal } from "./ViewThreadModal";

const dispatchProps = {
    editThread,
    selectThread,
};

const mapStateToProps = (state: ProphetState) => {
    return {
        selectedThread: state.threads.selectedThread,
        threads: state.threads.threads,
    };
};

export type ThreadsListProps = typeof dispatchProps & ReturnType<typeof mapStateToProps>;

const ThreadsList: React.FC<ThreadsListProps> = (props) => {
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const setViewThread = (id: string) => {
        props.selectThread(id);
        setShowEditModal(false);
        setShowViewModal(true);
    };

    const setEditThread = (id: string) => {
        props.selectThread(id);
        setShowViewModal(false);
        setShowEditModal(true);
    };

    // Render characters
    const threads = props.threads.map((c) => {
        return <ThreadListItem key={c.id} thread={c} viewThread={setViewThread} />;
    });

    return (
        <React.Fragment>
            {props.selectedThread && (
                <React.Fragment>
                    <ViewThreadModal
                        thread={props.selectedThread}
                        onHide={() => setShowViewModal(false)}
                        show={showViewModal}
                        editThread={setEditThread}
                    />
                    <EditThreadModal
                        thread={props.selectedThread}
                        show={showEditModal}
                        viewThread={setViewThread}
                    />
                </React.Fragment>
            )}
            <ul className="list-group list-group-flush">{threads}</ul>
        </React.Fragment>
    );
};

export const ThreadsListC = connect(
    mapStateToProps,
    dispatchProps,
)(ThreadsList);
