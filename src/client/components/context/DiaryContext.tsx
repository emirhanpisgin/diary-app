import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDialog } from './DialogContext';

export type DiaryT = {
    id: string;
    content: string;
    date: string;
}

export type DiaryContextType = {
    diaries: DiaryT[];
    addDiary: (diary: { content: string, date: string }) => void;
}

const DiaryContext = createContext<DiaryContextType | undefined>(undefined);

export const DiaryProvider = ({ children }: { children: ReactNode }) => {
    const [diaries, setDiaries] = useState<DiaryT[]>([]);
    const { clearDialog } = useDialog();

    useEffect(() => {
        const storedDiaries = localStorage.getItem("diaries");
        if (storedDiaries) {
            setDiaries(JSON.parse(storedDiaries));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("diaries", JSON.stringify(diaries));
    }, [diaries]);

    function addDiary(diary: { content: string, date: string }) {
        const newDiary = {
            id: uuidv4(),
            content: diary.content,
            date: diary.date
        }

        setDiaries([newDiary, ...diaries]);
        clearDialog();
    }

    return (
        <DiaryContext.Provider value={{ diaries, addDiary }}>
            {children}
        </DiaryContext.Provider>
    );
}

export function useDiary() {
    const context = useContext(DiaryContext);

    if (context === undefined) {
        throw new Error('useDiary must be used within a DiaryProvider');
    }

    return context;
}