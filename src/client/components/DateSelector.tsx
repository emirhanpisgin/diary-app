import { useEffect, useState } from "react";
import DropdownSelector from "./DropdownSelector";
import { getListUpToNumber, checkDate } from "../utils";

interface DateSelectorProps {
    date: string;
    setDate: (value: string) => void;
}

export default function DateSelector({ date, setDate }: DateSelectorProps) {
    const currentTime = new Date();
    const [day, setDay] = useState(currentTime.getDate());
    const [month, setMonth] = useState(currentTime.getMonth() + 1);
    const [year, setYear] = useState(currentTime.getFullYear());

    useEffect(() => {
        setDate(`${year}-${checkDate(month)}-${checkDate(day)}T00:00:00.000Z`);
    }, [day, month, year])

    return (
        <div className="flex gap-3">
            <DropdownSelector value={day} setValue={(value: number) => setDay(value)} values={getListUpToNumber(currentTime.getDate(), currentTime.getDate() - 3)} />
        </div>
    );
}
