let map: string[][] = [];

export const buildMap = (x: number, y: number): string[][] => {
    for (let i = 0; i < x; i++) {
        let square: string[] = [];
        for (let j = 0; j < y; j++) {
            square[j] = "---";
        }
        map[i] = square;
    }
    return map;
};
