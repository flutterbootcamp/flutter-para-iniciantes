---
sidebar_position: 13
---

# Stateless

Por ser mais simples e não possui estado, não dá trabalho nenhum ao framework. Apenas é construído e pronto, permanece imutável.

Quando criamos um Stateless widget, o Flutter executa o seu construtor e em seguida o método [build()](https://api.flutter.dev/flutter/widgets/StatelessWidget/build.html).

![Stateless](/img/stateless.png)

```dart
class MeuWidgetImutavel extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return const Text('Eu não terei meu estado alterado');
  }
}
```

A anatomia de um **Stateless** widget é esta: basicamente precisamos sobrescrever o método [build()](https://api.flutter.dev/flutter/widgets/StatelessWidget/build.html) para indicarmos ao Flutter como deve ser o nosso `MeuWidgetImutavel` , (neste caso apenas um texto).

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/WQ-cmdhkXCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>