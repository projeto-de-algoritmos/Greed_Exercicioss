function reservasDeVoosCorporativos(bookings: number[][], n: number): number[] {
    const resposta: number[] = new Array(n).fill(0);

    for (const reserva of bookings) {
        const primeiro = reserva[0];
        const ultimo = reserva[1];
        const assentos = reserva[2];

        // Adicione os assentos ao primeiro voo no intervalo da reserva
        resposta[primeiro - 1] += assentos;

        // Se o último voo no intervalo da reserva não for o último voo global,
        // subtraia os assentos do voo após o último voo no intervalo da reserva
        if (ultimo < n) {
            resposta[ultimo] -= assentos;
        }
    }

    // Calcule a soma cumulativa para obter o total de assentos para cada voo
    for (let i = 1; i < n; i++) {
        resposta[i] += resposta[i - 1];
    }

    return resposta;
}