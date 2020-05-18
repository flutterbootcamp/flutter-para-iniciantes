---
description: Entenda a diferença e saiba quando utilizar cada um deles.
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

Para clarificar:

O ícone de like no Instagram/Facebook, é um Stateful widget, pois ao ser pressionado, ele muda de cor e ainda atualiza a quantidade de curtidas naquele post/foto.

O texto com o nome do seu perfil, é um Stateless widget, pois ele é estático \(não possui nenhuma opção de interação\).



Ainda há espaço nos aprofundarmos neste assunto, mas por hora, entender esta básica diferença entre os tipos de widgets já é o suficiente. 

