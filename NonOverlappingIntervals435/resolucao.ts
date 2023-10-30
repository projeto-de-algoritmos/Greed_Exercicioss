export function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length <= 1) {
    return 0; // Não é necessário remover nenhum intervalo se houver 0 ou 1 intervalos.
  }

  // Classifique os intervalos de acordo com seus tempos de término em ordem crescente.
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0; // Inicialize a contagem de intervalos removidos.
  let prevEnd = intervals[0][1]; // Inicialize o tempo de término do primeiro intervalo.

  // Itere pelos intervalos classificados.
  for (let i = 1; i < intervals.length; i++) {
    const intervaloAtual = intervals[i];
    if (intervaloAtual[0] < prevEnd) {
      // Se o intervalo atual se sobrepõe ao anterior, remova-o.
      count++;
    } else {
      // Se não houver sobreposição, atualize o tempo de término anterior.
      prevEnd = intervaloAtual[1];
    }
  }

  return count;
}