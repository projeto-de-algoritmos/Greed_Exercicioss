import { findMinArrowShots } from "./resolucao";

// Exemplo de uso:
const pontos1 = [[10, 16], [2, 8], [1, 6], [7, 12]];
const pontos2 = [[1, 2], [3, 4], [5, 6], [7, 8]];
const pontos3 = [[1, 2], [2, 3], [3, 4], [4, 5]];

console.log(findMinArrowShots(pontos1)); // Saída: 2
console.log(findMinArrowShots(pontos2)); // Saída: 4
console.log(findMinArrowShots(pontos3)); // Saída: 2