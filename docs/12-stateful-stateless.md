---
sidebar_position: 12
---

# Stateless x Stateful

Já disse anteriormente que no Flutter temos apenas 2 tipos de widgets:

[Stateless](https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html): Um widget que **não** tem seu estado alterado.

* Um texto, é um widget que não tem seu estado alterado.

[Stateful](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html): Um widget que tem seu estado alterado.

* Um switch, é um widget que tem seu estado alterado. 

Por definição, na própria documentação da [API](https://api.flutter.dev/flutter/widgets/Widget-class.html), temos:

> Um widget é uma descrição imutável de parte de uma interface de usuário

Como assim?! Dois tipos, mutável e não mutável, e a API explicitamente nos dizendo que é imutável?

**Vamos lá!**  

A documentação complementa com a seguinte afirmação:

> Widgets por si só, não possuem estado mutável \(todos os campos devem ser final\). Se precisar associar um estado mutável a um widget, considere utilizar o [StatefulWidget](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html), que cria um objeto do tipo [State](https://api.flutter.dev/flutter/widgets/State-class.html)...

Logo, podemos assumir que com o objeto [State](https://api.flutter.dev/flutter/widgets/State-class.html), o widget do tipo [StatefulWidget](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html) torna-se mutável. 

Vamos para o código que as coisas ficarão mais fáceis:

#### StatelessWidget

```dart
class WidgetSemEstado extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FlutterLogo();
  }
}
```

1. Criamos um widget extendendo **StatelessWidget**.
2. Nosso widget retorna um [FlutterLogo](https://api.flutter.dev/flutter/material/FlutterLogo-class.html) widget.

#### StatefulWidget

```dart
class WidgetComEstado extends StatefulWidget {
  @override
  _WidgetComEstadoState createState() {
    return _WidgetComEstadoState();
  }
}

class _WidgetComEstadoState extends State<WidgetComEstado> {
  @override
  Widget build(BuildContext context) {
    return FlutterLogo();
  }
}
```

1. Criamos um widget extendendo StatefulWidget.
2. Nosso widget, através da função `createState()`, retorna o widget **WidgetComEstadoState**_._ \(lembrando que o "\_" faz com que o objeto seja privado\).
3. Como o widget **WidgetComEstadoState** extende de um objeto do tipo [State](https://api.flutter.dev/flutter/widgets/State-class.html), conseguimos armazenar informações, que podem ser lidas e atualizadas. E com este objeto, temos acesso ao método [setState\(\)](https://api.flutter.dev/flutter/widgets/State/setState.html), que quando é executado, faz com que o nosso widget seja reconstruído. Ou seja, ao atualizarmos uma informação, executarmos o método setState, o nosso widget é reconstruído com a informação atualizada.  
4. O widget **WidgetComEstadoState** retorna um [FlutterLogo](https://api.flutter.dev/flutter/material/FlutterLogo-class.html) widget.

Agora que já sabemos a teoria, vamos para a prática e implementar os benefícios que o objeto [State](https://api.flutter.dev/flutter/widgets/State-class.html) proporciona ao widget.

```dart
class _WidgetComEstadoState extends State<WidgetComEstado> {
  var _tamanho = 32.0;

  void aumentar() {
    setState(() {
      _tamanho = _tamanho + 16;
    });
  }

  void diminuir() {
    setState(() {
      _tamanho = _tamanho - 16;
    });
  }

  @override
  Widget build(BuildContext context) {
    return FlutterLogo(
      size: _tamanho,
    );
  }
}
```

1. Adicionamento a informação `_tamanho` ao nosso widget.
2. Criamos as funções `aumentar()` e `diminuir()`.
3. Em cada uma delas, alteramos a informação e chamamos a função `setState`. 
4. Assim, quando as funções `aumentar()` e `diminuir()` forem chamadas, a informação tamanho será atualizada e com a execução da função `setState`, o nosso widget será reconstruído, já contemplando o novo valor de `_tamanho`. 

<iframe height="300" width="100%" scrolling="no" title="WidgetComEstado" src="https://codepen.io/rubensdemelo/embed/MWazGOq?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rubensdemelo/pen/MWazGOq">
  WidgetComEstado</a> by rubensdemelo (<a href="https://codepen.io/rubensdemelo">@rubensdemelo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Veja o código acima em ação no [DartPad](https://dartpad.dev/7cdef4bf893153604b7fb18a6c9a6142).

Ainda há espaço nos aprofundarmos neste assunto, mas por hora, entender esta básica diferença entre os tipos de widgets já é o suficiente. 

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/50b-Ji2V6n0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>