import React, { useState } from "react";
import { AddCharacterModalC as AddCharacterModal } from "./AddCharacterModal";
import { CharactersListC as CharactersList } from "./CharactersList";

export const Characters: React.FC = () => {
    const [showAddModal, setShowAddModal] = useState(false);

    return (
        <section className="card h-100">
            <AddCharacterModal
                show={showAddModal}
                onHide={() => setShowAddModal(false)}
            />
            <header
                className="card-header font-weight-bold d-flex align-items-center
            justify-content-between">
                Characters
                <a
                    href="#"
                    className="fas fa-plus text-decoration-none"
                    onClick={() => setShowAddModal(true)}
                />
            </header>
            <CharactersList />
        </section>
    );
};
