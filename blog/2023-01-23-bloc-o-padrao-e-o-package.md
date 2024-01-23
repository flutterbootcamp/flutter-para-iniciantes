---
slug: bloc-o-padrao-e-o-package
title: BLoC - O padrão e o package
authors: rubensdemelo
tags: [flutter, bloc, package]
---

![BLoC Banner](/img/blog/bloc-padrao-package.png)

Gerenciamento de estado com Flutter é um tópico bem amplo e neste post vamos explorar (um pouco) sobre o tão conhecido BLoC!

BLoC e bloc_library **não** são a mesma coisa! É crucial entender que, apesar do nome, eles representam coisas diferentes.

O padrão *BLoC* é uma arquitetura que separa a lógica de negócios da interface do usuário.

O package *bloc_library* é uma implementação concreta desse padrão.

O *pattern* e o *package* são distintos. 

O *pattern* foi apresentado pelo Google na DartConf em 2018. Foi a arquitetura escolhidas para compartilhar a lógica de negócio entre um aplicativo Flutter e uma aplicação AngularDart, utilizando Streams.

O *package* implementa esta arquitetura, abstraindo e facilitando a implementação do pattern. E deu tão certo que é um dos packages mais populares para gerenciamento de estado.

E é essencial reconhecer que o *pattern* em si é independente e pode ser implementado sem este *package*.