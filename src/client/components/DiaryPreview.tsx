interface DiaryPreviewProps {
    content: string;
    date: string;
}

export default function DiaryPreview({ content, date }: DiaryPreviewProps) {
    return (
        <div className="flex bg-zinc-600 rounded-xl p-3 justify-center flex-col">
            <div className="text-3xl font-semibold">
                {new Date(date).toLocaleDateString("tr-TR")}
            </div>
            <div className="text-2xl">
                {content}
            </div>
        </div>
    );
}
