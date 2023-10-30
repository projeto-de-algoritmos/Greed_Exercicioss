import { eraseOverlapIntervals } from "./resolucao";

const intervalos1 = [[1, 2], [2, 3], [3, 4], [1, 3]];
const intervalos2 = [[1, 2], [1, 2], [1, 2]];
const intervalos3 = [[1, 2], [2, 3]];

console.log(eraseOverlapIntervals(intervalos1)); // Saída: 1
console.log(eraseOverlapIntervals(intervalos2)); // Saída: 2
console.log(eraseOverlapIntervals(intervalos3)); // Saída: 0
