import { useEffect, useRef, useState } from "react";

interface DropdownSelectorProps<T> {
    value: T;
    values: T[];
    setValue: (value: T) => void;
}

export default function DropdownSelector<T extends string | number>({ value, values, setValue }: DropdownSelectorProps<T>) {
    const [isOpen, setOpen] = useState(false);
    const listRef = useRef(null);

    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, v: T) {
        e.preventDefault();

        setOpen(false);

        setValue(v);
    }

    useEffect(() => {
        if(!listRef.current) return;
        addEventListener("click", (e) => {
            e.preventDefault();

            if(e.target === listRef.current) {
                setOpen(false);
            }
        });
    },[listRef])

    return (
        <div className="relative text-2xl font-semibold">
            <div className="flex font-semibold bg-zinc-700 p-2 rounded-lg select-none">
                {value}
                <div className={`${isOpen ? "rotate-0" : "rotate-90"} aspect-square ml-2 grid place-items-center transition-transform cursor-pointer`} onClick={() => setOpen(!isOpen)}>
                    <ArrowIcon />
                </div>
            </div>
            {isOpen && <div ref={listRef} className="absolute w-full text-center overflow-auto bg-zinc-700 rounded-lg shadow-xl">
                {values.filter(v => v !== value).map((v, index) => (
                    <div key={index} className="cursor-pointer hover:text-white hover:drop-shadow-2xl transition-colors" onClick={(e) => handleClick(e, v)}>
                        {v}
                    </div>
                ))}
            </div>}
        </div>
    );
}

function ArrowIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 1024 1024">
            <path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496" />
        </svg>
    );
}