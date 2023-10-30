# Algoritmo de Interval Scheduling

O algoritmo de Interval Scheduling é um problema de otimização que lida com a seleção de um conjunto máximo de intervalos compatíveis a partir de um conjunto de intervalos dados. O objetivo é maximizar o número de intervalos selecionados, evitando que eles se sobreponham. É amplamente usado em planejamento de recursos, programação de salas de aula, agendamento de reuniões e outras áreas.

## O Problema

Dado um conjunto de intervalos, cada intervalo é representado por um par de valores (inicio, fim), onde "inicio" representa o tempo de início do intervalo e "fim" representa o tempo de término. O problema é selecionar o maior número de intervalos que não se sobrepõem.

## Algoritmo de Solução

O algoritmo de Interval Scheduling é resolvido de forma gulosa. A abordagem gulosa funciona selecionando o próximo melhor intervalo disponível em relação ao critério de escolha, sem considerar o impacto nas seleções futuras. Aqui está o procedimento básico do algoritmo:

1. Ordene os intervalos em ordem crescente de tempo de término (fim).
2. Inicialize um conjunto vazio de intervalos selecionados.
3. Comece com o primeiro intervalo na lista ordenada.
4. Para cada intervalo subsequente, se ele não se sobrepuser com o último intervalo selecionado, adicione-o ao conjunto de intervalos selecionados.
5. Repita o processo até que todos os intervalos tenham sido verificados.

## Exemplo

Suponha que tenhamos os seguintes intervalos:

| Intervalo | Início | Fim    |
| --------- | ------ | ------ |
| A         | 1      | 3      |
| B         | 2      | 4      |
| C         | 3      | 5      |
| D         | 5      | 7      |
| E         | 6      | 8      |
| F         | 8      | 9      |

Aplicando o algoritmo de Interval Scheduling:

1. Ordenamos os intervalos em ordem crescente de tempo de término:
- A, B, C, D, E, F


2. Começamos com o primeiro intervalo (A).

3. Continuamos selecionando intervalos que não se sobrepõem:

- A não se sobrepõe com B, então adicionamos B ao conjunto selecionado.
- B não se sobrepõe com C, então adicionamos C.
- C se sobrepõe com D, então pulamos D.
- C não se sobrepõe com E, então adicionamos E.
- E se sobrepõe com F, então pulamos F.

4. O conjunto final de intervalos selecionados é {A, B, C, E}.

## Complexidade

O algoritmo de Interval Scheduling tem uma complexidade de tempo de O(n * log(n)), onde "n" é o número de intervalos, devido à etapa de ordenação.

O algoritmo guloso de Interval Scheduling fornece uma solução ótima para o problema de seleção de intervalos compatíveis, desde que os intervalos estejam inicialmente classificados pelo tempo de término. No entanto, se os intervalos não estiverem classificados, a primeira etapa de ordenação é necessária para garantir que o algoritmo funcione corretamente.
