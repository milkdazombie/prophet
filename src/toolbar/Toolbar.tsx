import React from "react";
import { ToolbarFateC as ToolbarFate } from "./ToolbarFate";
import { ToolbarHeader } from "./ToolbarHeader";
import { ToolbarSaveLoadC as ToolbarSaveLoad } from "./ToolbarSaveLoad";

export const Toolbar: React.FC = () => {
    return (
        <div className="card card-body h-100 p-0 flex-row">
            <ToolbarHeader />
            <ToolbarFate />
            <ToolbarSaveLoad />
        </div>
    );
};
