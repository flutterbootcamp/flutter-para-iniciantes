---
sidebar_position: 1
---

# Introdução

 O Flutter oferece um excelente suporte para a construção de animações incríveis, uma vez que tudo o que está na tela é "pintado pixel por pixel", graças à biblioteca [Skia](https://skia.org/). E felizmente, elas são extremamente bem documentadas, vale a pena conferir a documentação [oficial](https://flutter.dev/docs/development/ui/animations).

Elas são dividas em 2 tipos diferentes:

**Implícitas:** O controle da animação é feito pelo Flutter.

**Explícitas:** O controle da animação é feito pelo desenvolvedor.

:::tip Controle ?!
Por **controle**, podemos entender: início, duração e efeito \(basicamente\).
:::

O significado das palavras ajudará no entendimento:

[Implícito](https://www.dicio.com.br/implicito/): Aquilo que não se expressa de modo claro.

[Explícito](https://www.dicio.com.br/explicito/): Que é expresso sem dúvidas nem ambiguidades.

Ainda não está claro? Sem problemas, explico com mais detalhes. 

Imagine que alguém te delega uma tarefa: **ir ao mercado comprar leite**. A tarefa pode ser delegada da seguinte forma:

**Implícita:** Vá ao mercado e compre 1 litro de leite.

**Explícita:** Vá ao mercado, compre 1 litro de leite desnatado, da marca XPTO, antes das 9h da manhã.

Trazendo para o nosso contexto, nós delegamos ao Flutter a tarefa de animar widgets. Seja mudar da cor vermelho para amarelo, mudar do tamanho de 10 para 30, ir do ponto X para o ponto Y. A animação é a mesma, porém, a forma como delegamos pode ser implícita ou explícita.  