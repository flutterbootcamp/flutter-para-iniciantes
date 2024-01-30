---
slug: aprenda-com-commits-do-flutter-1
title: Aprenda com os commits do Flutter
authors: rubensdemelo
tags: [flutter, bloc, package]
---

Hey 👋,

Hoje vou compartilhar com você um commit bem interessante do repositório do Flutter: 

[Implementing switch expressions in foundation/ and material/](https://github.com/flutter/flutter/pull/142279/files)

Contém a implementação do "novo" `switch` da linuagem Dart em 2 pacotes importantíssimos do framework: **foundation** e o **material**. É interessante ver na prática como um novo recurso da linguagem agora integra os aplicativos que iremos criar. 

O Dart vem evoluindo e se aperfeiçoando, trazendo funcionalidades já existentes em outras linguagens, tornando-a assim mais robusta e atrativa, especialmente para dessenvolvedores de plataforma nativas que contam com alguns recurso que só existem no Kotlin/Swift. 

Lendo o código antes e depois podemos avaliar o quanto a legibilidade melhora.

Aqui está o código antigo:
```dart
switch (parameters['value']) {
    case 'Brightness.light':
    debugBrightnessOverride = ui.Brightness.light;
    case 'Brightness.dark':
    debugBrightnessOverride = ui.Brightness.dark;
    default:
    debugBrightnessOverride = null;
}
```
Aqui está o código novo:

```dart
debugBrightnessOverride = switch (parameters['value']) {
    'Brightness.light' => ui.Brightness.light,
    'Brightness.dark'  => ui.Brightness.dark,
    _ => null,
};
```

Este novo `switch` foi introduzido na versão 3.1, liberada em agosto de 2023. Ou seja, não é uma atualização tão nova assim, mas só agora ela está fazendo parte do Flutter. Deixo aqui o link para você conferir em detalhes: [https://dart.dev/language/branches#switch-expressions](https://dart.dev/language/branches#switch-expressions)

Espero que você tenha gosta e esta dica tenha sido útil. Dá uma conferida no link do commit, vale a pena! 