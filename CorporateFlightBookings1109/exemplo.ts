// Exemplo 1
const reservas1 = [[1, 2, 10], [2, 3, 20], [2, 5, 25]];
const n1 = 5;
const resultado1 = corpFlightBookings(reservas1, n1);
console.log(resultado1); // Saída: [10, 55, 45, 25, 25]

// Exemplo 2
const reservas2 = [[1, 2, 10], [2, 2, 15]];
const n2 = 2;
const resultado2 = corpFlightBookings(reservas2, n2);
console.log(resultado2); // Saída: [10, 25]