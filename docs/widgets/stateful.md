---
sidebar_position: 3
---

# Stateful

Inicialmente, parece ser tão simples quando o [Stateless](https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html) widget, quando criamos nosso widget, o Flutter chama o seu construtor e em seguida o método [createState()](https://api.flutter.dev/flutter/widgets/StatefulWidget/createState.html).

![Stateful](/img/stateful.png)

```dart
import 'package:flutter/material.dart';

class MeuWidgetMutavel extends StatefulWidget {
  @override
  _MeuWidgetMutavelState createState() => _MeuWidgetMutavelState();
}

class _MeuWidgetMutavelState extends State<MeuWidgetMutavel> {
  @override
  Widget build(BuildContext context) {
    return const Text('Eu terei meu estado alterado');
  }
}

```

* O uso do "\_" torna o widget privado para o escopo da biblioteca em que ele se encontra;
* O uso de "=>" indica que este método executa apenas 1 função.

Mas não se engane, pois a diferença não é apenas no nome dos métodos. Lembre-se que ao criar um objeto do tipo [State](https://api.flutter.dev/flutter/widgets/State-class.html), um [Stateful](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html) widget ganha poderes mutáveis?! Então, é dentro dele que a mágica acontece.

Nosso `MeuWidgetImutavel` ao ser construído pelo framework, executa o método `createState()` (linha 5) e este por sua vez, executa apenas 1 função, que é instanciar `_MeuWidgetImutavelState`. Ele é um filho de [State](https://api.flutter.dev/flutter/widgets/State-class.html), logo, herda algumas características e comportamentos (linha 8).

