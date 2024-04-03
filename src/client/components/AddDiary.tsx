import { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import DateSelector from "./DateSelector";
import { useDiary } from "./context/DiaryContext";

export default function AddDiary() {
    const [date, setDate] = useState(new Date().toISOString());
    const [content, setContent] = useState("");
    const { addDiary } = useDiary();


    return (
        <div className="h-[90%] max-h-[90%] w-[90%] bg-zinc-600 rounded-3xl p-5 overflow-hidden flex flex-col gap-3">
            <DateSelector date={date} setDate={(value) => setDate(value)} />
            <div className="flex-1 overflow-auto bg-zinc-700 rounded-lg p-3">
                <TextareaAutosize className="outline-none border-none bg-transparent w-full min-h-full h-full text-xl overflow-hidden resize-none" placeholder="Günün nasıl geçti?" onChange={(e) => setContent(e.target.value)} />
            </div>
            <div className="flex justify-end">
                <div className="bg-green-600 text-3xl p-3 rounded-xl font-semibold select-none cursor-pointer grid place-items-center hover:bg-green-700 transition-colors" onClick={(e) => addDiary({ content, date })}>Kaydet</div>
            </div>
        </div>
    );
}
