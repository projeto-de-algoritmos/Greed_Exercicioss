# Algoritmo de Interval Partitioning

O algoritmo de Interval Partitioning é um problema de otimização que lida com a distribuição de intervalos em um número mínimo de recursos (partições) para evitar sobreposições. É amplamente utilizado em problemas de agendamento, como alocar salas de aula para aulas, agendar tarefas em máquinas, ou programar reuniões em salas de conferência.

## O Problema

Dado um conjunto de intervalos, cada intervalo é representado por um par de valores (inicio, fim), onde "inicio" representa o tempo de início do intervalo e "fim" representa o tempo de término. O objetivo é dividir esses intervalos em partições de modo que nenhum par de intervalos em uma mesma partição se sobreponha.

## Algoritmo de Solução

O algoritmo de Interval Partitioning é resolvido de forma gulosa. A abordagem gulosa funciona selecionando o próximo melhor intervalo disponível em relação ao critério de escolha, sem considerar o impacto nas seleções futuras. Aqui está o procedimento básico do algoritmo:

1. Ordene os intervalos em ordem crescente de tempo de início.
2. Inicialize um conjunto vazio de partições.
3. Comece com o primeiro intervalo na lista ordenada.
4. Para cada intervalo subsequente, aloque-o na primeira partição onde ele não se sobreponha com os intervalos já alocados.
5. Se nenhum das partições existentes puder acomodar o intervalo, crie uma nova partição para ele.
6. Repita o processo até que todos os intervalos tenham sido alocados.

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

Aplicando o algoritmo de Interval Partitioning:

1. Ordenamos os intervalos em ordem crescente de tempo de início:
- A, B, C, D, E, F

2. Começamos com o primeiro intervalo (A) e criamos a primeira partição.

3. Continuamos alocando intervalos em partições de forma que não haja sobreposições:

- A não se sobrepõe com B, então alocamos B na mesma partição de A.
- C se sobrepõe com B, então criamos uma nova partição e alocamos C nela.
- D não se sobrepõe com A ou B, então alocamos D na primeira partição.
- E não se sobrepõe com A, B, ou D, então alocamos E na primeira partição.
- F se sobrepõe com E, então criamos uma nova partição e alocamos F nela.

4. O conjunto final de partições contém duas partições: {A, B, D, E} e {C, F}.

## Complexidade

O algoritmo de Interval Partitioning tem uma complexidade de tempo de O(n * log(n)), onde "n" é o número de intervalos, devido à etapa de ordenação.

O algoritmo guloso de Interval Partitioning fornece uma solução eficiente para o problema de distribuir intervalos em partições, minimizando o número de partições necessárias. É amplamente utilizado em problemas de agendamento e alocação de recursos.
