// Exemplo 1
const reservasExemplo1 = [[1, 2, 10], [2, 3, 20], [2, 5, 25]];
const nExemplo1 = 5;
const resultadoExemplo1 = corpFlightBookings(reservasExemplo1, nExemplo1);
console.log(resultadoExemplo1); // Saída: [10, 55, 45, 25, 25]

// Exemplo 2
const reservasExemplo2 = [[1, 2, 10], [2, 2, 15]];
const nExemplo2 = 2;
const resultadoExemplo2 = corpFlightBookings(reservasExemplo2, nExemplo2);
console.log(resultadoExemplo2); // Saída: [10, 25]