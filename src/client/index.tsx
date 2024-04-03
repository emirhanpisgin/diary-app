import { createRoot } from "react-dom/client";
import App from "./App";
import "./globals.css";
import { DialogProvider } from "./components/context/DialogContext";
import DialogRenderer from "./components/DialogRenderer";
import { DiaryProvider } from "./components/context/DiaryContext";

const root = createRoot(document.body);

root.render(
    <DialogProvider>
        <DiaryProvider>
            <App />
            <DialogRenderer />
        </DiaryProvider>
    </DialogProvider>
);