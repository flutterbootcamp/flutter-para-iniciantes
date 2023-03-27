---
slug: declarativo-imperativo
title: Imperativo X Declarativo
authors: rubensdemelo
tags: [flutter, imperativo, declarativo]
---

:::info Resumão: 
Imperativa: especificar como resolver um problema; controle detalhado.

Declarativa: concentra-se no que o código deve realizar; concentrar no resultado.

Essas duas abordagens são comumente usadas na programação e é importante entender suas diferenças para compreender melhor o uso [declarativo pelo Flutter](https://docs.flutter.dev/get-started/flutter-for/declarative).

Compreender a diferença, facilita o entendimento em como o Flutter constroi interfaces.
:::



## Imperativa

É um processo passo a passo que diz ao computador o que fazer e como fazê-lo. Em outras palavras, é um conjunto de instruções que o computador segue para alcançar o resultado desejado.

A programação imperativa envolve escrever código que especifique exatamente como resolver um problema. Ela é baseada no controle do fluxo de execução usando declarações como loops, condicionais e variáveis. Lembre-se: **passo-a-passo**.

Adequada para situações em que você precisa ter mais controle sobre o fluxo do programa. Isso significa que se você precisa fazer algo muito específico e precisa ter certeza de que é feito de uma maneira determinada, então a abordagem imperativa pode ser a melhor.

## Declarativa

É baseada em descrever o resultado desejado sem especificar como alcançá-lo. Em vez de escrever código que especifica como resolver um problema, a programação declarativa se concentra no que o código deve realizar.

A programação declarativa envolve escrever código que descreve o problema e o resultado desejado, sem especificar como chegar lá. É baseado na definição de regras e relacionamentos entre elementos. Lembre-se: **resultado-desejado**.

Adequada para situações em que você deseja descrever o que deseja alcançar, sem se preocupar em como chegar lá. Isso significa que se você deseja se concentrar no resultado, e não no processo.

Ao trabalhar com interfaces de usuário, usar a abordagem declarativa para garantir que a interface pareça e se comporte exatamente como você deseja, sem se preocupar com a forma como é implementada.

## Na prática

SQL: Declarativo. Declaramos o resultado ao banco de dados: inserir, atualizar, excluir, consultar... mas nós não o instruimos em como ele deve executar tais operações.

Algorítimo: Imperativo. Imposto a cada linha de código como ele deve se comportar. Declarar variável, computar valores, avaliar expressões. Estamos instruindo exatamente o comportamento que queremos que o programa tenha.

## Flutter

Como mecionado anteriormente, o Flutter utiliza a abordagem declarativa: **resultado**. 

Ao construi interfaces com ele, declaramos algo como: 1 imagem, 2 campos de texto e um botão.

E o framework se encarrega de todo o resto, sem se preocupar com a implementação de cada elemento. 

Com isso, os desenvolvedores podem se concentrar no que desejam alcançar e deixar que o framework se encarregue de como implementá-lo.

#### Até breve
