---
description: Todo o poder das Streams  à seu dispor.
---

# BLoC

**B**usiness **L**ogic **o**f **C**omponent \(ou BLoC para os íntimos\) é um padrão apresentado pelo Google na DartConf 2018, sobre o compartilhamento de código entre o Flutter e o AngularDart. 

Usando Flutter para a versão mobile e AngularDart para a versão web, como podemos gerenciar o estado do aplicativo, com menos esforço possível? Utilizando uma solução que esteja disponível para as duas plataformas, que neste caso são [Streams](https://dart.dev/tutorials/language/streams).

As opções apresentadas anteriormente utilizam recursos internos do Flutter e que não podemos utilizar fora do framework. 

Streams são um recurso nativo da linguagem Dart, ou seja, podemos utilizá-las independente da plataforma.

Sendo assim, nossa solução de gerenciamento de estado é puramente código Dart, podendo ser utilizada em qualquer plataforma.



