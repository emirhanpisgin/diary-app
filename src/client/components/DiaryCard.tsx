import { useDialog } from "./context/DialogContext";
import DiaryPreview from "./DiaryPreview";

interface DiaryCardProps {
    date: string;
    content: string;
}

export default function DiaryCard({ content, date }: DiaryCardProps) {
    const { setDialogComponent } = useDialog();

    return (
        <div className="border-zinc-300 flex border-2 h-min p-2 rounded-xl text-2xl cursor-pointer hover:-translate-y-1 transition-transform" onClick={(e) => setDialogComponent(<DiaryPreview content={content} date={date} />)}>
            {new Date(date).toLocaleDateString("tr")}
        </div>
    );
}
