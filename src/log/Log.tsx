import React, { useState } from "react";
import { LogContentC as LogContent } from "./LogContent";
import { LogFooterC as LogFooter } from "./LogFooter";
import { LogBaseItem } from "./LogTypes";

export const Log: React.FC = () => {
    const [log, setLog] = useState<LogBaseItem[]>([]);

    return (
        <section className="card h-100">
            <header className="card-header font-weight-bold">Log</header>
            <LogContent />
            <LogFooter />
        </section>
    );
};
