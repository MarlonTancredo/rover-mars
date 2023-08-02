export const mapArea = (x: number, y: number): string[][] => {
  const terrain: string[][] = [];
  for (let i = 0; i < x; i++) {
    let square: string[] = [];
    for (let j = 0; j < y; j++) {
      square[j] = " ";
    }
    terrain[i] = square;
  }
  return terrain;
};
