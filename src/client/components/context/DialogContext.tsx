import React, { createContext, useContext, useState } from "react";

export type DialogContextType = {
    dialogComponent?: React.ReactNode;
    setDialogComponent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
    const [dialogComponent, setDialogComponent] = useState<JSX.Element | undefined>(undefined);

    return (
        <DialogContext.Provider value={{ dialogComponent, setDialogComponent }}>
            {children}
        </DialogContext.Provider>
    );
};

export function useDialog() {
    const context = useContext(DialogContext);

    if (context === undefined) {
        throw new Error('useDialog must be used within a DialogProvider');
    }

    return context;
}