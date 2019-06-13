import React from "react";
import { ChaosFactorC as ChaosFactor } from "./chaos-factor/ChaosFactor";
import { Characters } from "./characters/Characters";
import { Log } from "./log/Log";
import { Threads } from "./threads/Threads";
import { Toolbar } from "./toolbar/Toolbar";

export const Prophet: React.FC = () => {
    return (
        <main className="container py-3">
            <div className="row h-75">
                <div className="col-md-6">
                    <Log />
                </div>
                <div className="col-md-6 d-flex flex-column">
                    <div className="row">
                        <div className="col w-100">
                            <ChaosFactor />
                        </div>
                    </div>
                    <div className="row mt-3 flex-grow-1">
                        <div className="col-md-6">
                            <Characters />
                        </div>
                        <div className="col-md-6">
                            <Threads />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row h-25 py-3">
                <div className="col-md-12 h-100">
                    <Toolbar />
                </div>
            </div>
        </main>
    );
};
