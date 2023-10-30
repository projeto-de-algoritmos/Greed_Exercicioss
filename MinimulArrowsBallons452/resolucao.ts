export function findMinArrowShots(pontos: number[][]): number {
    if (pontos.length === 0) {
        return 0;
    }

    // Ordena os balões pelos pontos finais em ordem crescente.
    pontos.sort((a, b) => a[1] - b[1]);

    let flechas = 1;  // Pelo menos uma flecha é necessária.
    let fim = pontos[0][1];

    for (let i = 1; i < pontos.length; i++) {
        const balao = pontos[i];
        const inicio = balao[0];

        // Se o balão atual começa depois do término do balão anterior, precisamos de uma nova flecha.
        if (inicio > fim) {
            flechas++;
            fim = balao[1];
        }
    }

    return flechas;
}