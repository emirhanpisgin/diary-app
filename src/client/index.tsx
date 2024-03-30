import { createRoot } from "react-dom/client";
import App from "./App";
import "./globals.css";
import { DialogProvider } from "./components/context/DialogContext";
import DialogRenderer from "./components/DialogRenderer";

const root = createRoot(document.body);

root.render(
    <DialogProvider>
        <App />
        <DialogRenderer />
    </DialogProvider>
);