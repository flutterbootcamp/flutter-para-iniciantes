---
description: A maneira mais fácil de propagar informações para a sua Widget Tree.
---

# InheritedWidget

Não importa quão grande seja a sua estrutura de widgets, se precisar passar informações no sentido TOP-DOWN \(de cima para baixo\), sem dúvida alguma o [InheritedWidget](https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html) deve ser a sua escolha. 

{% hint style="info" %}
Recomendo que você assista aos 2 vídeos que constam na documentação. São curtos e didáticos.
{% endhint %}

Ao criarmos um widget extendendo um [InheritedWidget](https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html), temos que sobrescrever os métodos **`of`** \(para acessar nosso widget facilmente\) e **`updateShouldNotify`** \(para indicar quando nosso widget deve ser reconstruído\).

```dart
class MeuEmail extends InheritedWidget {
  const MeuEmail({
    Key key,
    @required this.provedor,
    @required Widget child,
  }) : assert(color != null),
       assert(child != null),
       super(key: key, child: child);

  final String provedor;

  static MeuEmail of(BuildContext context) {
    return context.inheritFromWidgetOfExactType(MeuEmail) as MeuEmail;
  }

  @override
  bool updateShouldNotify(MeuEmail old) => provedor != old.provedor;
}
```

No exemplo acima, para acessar a propriedade provedor do widget **MeuEmail**, basta apenas invocar: 

```dart
final provedorEmail = MeuEmail.of(context).provedor;
```

Simples, certo? Por isso o esta solução é utilizada \(e muito!\) pelo Flutter. Com ela, é possível acessar em qualquer lugar na _**widget tree**_ informações como o tamanho da tela e o tema da aplicação \(cores, tamanhos, fontes, etc\).

{% hint style="warning" %}
**Inherited** significa _**herdado**_, sendo assim, todos os filhos de um **InheritedWidget** acessam suas propriedades facilmente \(eles herdam tais propriedade do "pai"\). Por isso o comum é colocar o InheritedWidget no topo da _**widget tree**_. 
{% endhint %}

Se necessário alterar a propriedade `provedor` do widget MeuEmail e refletir esta alteração por toda a estrutura de widget, devemos combinar os widgets [InheritedWidget](https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html) e [InheritedModel](https://api.flutter.dev/flutter/widgets/InheritedModel-class.html). 

Como sugerido pelos vídeos da documentação, nesta situação o ideal é utilizar os packages como o [scoped\_model](https://pub.dev/packages/scoped_model) ou [provider](https://pub.dev/packages/provider). Eles irão prover este mesmo tipo de comportamento, com muito menos código.

 

