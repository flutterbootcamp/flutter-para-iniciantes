---
slug: escolhendo-gerenciamento-estado
title: Escolhendo o gerenciamento de estado
authors: rubensdemelo
tags: [flutter, gerenciamento-estado]
---

:::info Resumão: 

Flutter é um framework não-opinativo. 

Responsabilidade e discernimento na escolha. 

Mantenha o mais simples possível
:::

O Flutter é um framework não opinativo, ou seja, ele não impõe e não obriga sobre como funcionalidades devem ser implementadas. 

Permite que os desenvolvedores usem a sua criatividade e experiência para encontrar soluções personalizadas para seus problemas, em vez de serem forçados a seguir um conjunto rígido de regras e convenções impostas pelo framework.

Isso significa que é possível escolher diferentes opções que resolvem o mesmo problema.

Consumir uma API REST, utilizando o package [http](https://pub.dev/packages/http), [dio](https://pub.dev/packages/dio) ou [chopper](https://pub.dev/packages/chopper) ?.

Navegação utilizando APIs nativas ou packages como [fluro](https://pub.dev/packages/fluro), [beamer](https://pub.dev/packages/beamer) ou [go_router](https://pub.dev/packages/go_router) ?.

Armazenamento local, com [sqflite](https://pub.dev/packages/sqflite), [drift](https://pub.dev/packages/drift) ou [isar](https://pub.dev/packages/isar) ?.

Cada uma das opções possuem prós e contras.

No gerenciamento de estado, a mesma coisa.

Sobram alternativas nativas: [setState()](https://api.flutter.dev/flutter/widgets/State/setState.html), [ChangeNotifier](https://api.flutter.dev/flutter/foundation/ChangeNotifier-class.html), [InheritedWidget](https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html), [StreamBuilder](https://api.flutter.dev/flutter/widgets/StreamBuilder-class.html), etc.

E packages, como [riverpod](https://pub.dev/packages/riverpod), [flutter_bloc](https://pub.dev/packages/flutter_bloc), [provider](https://pub.dev/packages/provider), [mobx](https://pub.dev/packages/mobx), etc.

Mas qual o motivo então de discussões acaloradas sobre a "melhor" alternativa para gerenciamento de estado ?

O motivo é simples: não existe "bala de prata", ou seja, não existe a melhor opção. E sim, aquela opção que se encaixa melhor no seu projeto.

Cabe aos desenvolvedores a responsabilidade e o discernimento na escolha.

É natural que as pessoas discutam sobre como fazer isso da “melhor” maneira possível. E cada um vai defender a sua escolha em detrimento das outras.

Felizmente, o amadurecimento do Flutter e da comunidade contribuíram para que estas discussões tivessem cada vez **menos importância**. Mas ainda assim continua sendo um tópico “quente”.

O Flutter é um framework que oferece flexibilidade e liberdade de escolha em suas implementações.

E como mencionado anteriormente, **não existe** a “melhor” maneira. A escolha da opção de gerenciamento de estado ideal depende do projeto e do **contexto** em que está sendo usada.

E para finalizar e responder a pergunta deste post, aqui está a resposta: 

- Avalie se as alternativas nativas são suficientes
- Se optar por packages, considere a complexidade do estado no aplicativo. Avalie a documentação e repositório. Avalie mais de um package.
- Faça uma prova de conceito com a situação mais complexa possível.

Regra de ouro: mantenha o mais simples possível.