import React, { useState } from "react";
import { AddThreadModalC as AddThreadModal } from "./AddThreadModal";
import { ThreadsListC as ThreadsList } from "./ThreadsList";

export const Threads: React.FC = () => {
    const [showAddModal, setShowAddModal] = useState(false);

    return (
        <section className="card h-100">
            <AddThreadModal show={showAddModal} onHide={() => setShowAddModal(false)} />
            <header
                className="card-header font-weight-bold d-flex align-items-center
            justify-content-between">
                Threads
                <a
                    href="#"
                    className="fas fa-plus text-decoration-none"
                    onClick={() => setShowAddModal(true)}
                />
            </header>
            <ThreadsList />
        </section>
    );
};
