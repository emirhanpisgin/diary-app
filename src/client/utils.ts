export function getListUpToNumber(max: number, min: number = 1): number[] {
    const result: number[] = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

export function checkDate(integer: number) {
    const str = integer.toString();

    if (str.length === 1) {
        return ("0" + str);
    }

    return str;
}
