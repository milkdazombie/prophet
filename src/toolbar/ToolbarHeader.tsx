import React from "react";

export const ToolbarHeader: React.FC = () => {
    return (
        <header
            className="d-flex h-100 flex-column justify-content-center align-items-center
    w-25 border-right p-4">
            <h1 className="h2 text-muted">Prophet</h1>
            <h2 className="h6 text-muted">
                Made by{" "}
                <a href="https://github.com/Fraedon" target="_blank" rel="noopener noreferrer">
                    @Fraedon
                </a>
            </h2>
        </header>
    );
};
