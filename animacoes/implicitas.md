---
description: Suas primeiras animações começam aqui. E muito mais fácil do que você imagina.
---

# Implícitas

Para mostrar o quão simples é criar uma animação com Flutter, vamos direto para o código:

Vamos criar nosso **"ContainerDesanimado"**:

```dart
Container(
  width: 150, height: 150,
  color: cor //variável para armazenar a cor 
)
```

Ao clicarmos no botão, a nova cor passa a ser amarelo. 

{% hint style="info" %}
O método **`setState`** é invocado e a variável **`cor`** recebe o novo valor.
{% endhint %}

{% embed url="https://codepen.io/rubensdemelo/pen/oNYggKM" %}

Sem graça, não é? Vamos animá-lo! Para isso, é só substituir o Container por um [AnimatedContainer](https://api.flutter.dev/flutter/widgets/AnimatedContainer-class.html):

```dart
AnimatedContainer(
  duration: Duration(seconds: 1),
  width: 150, height: 150,
  color: cor
)
```

Só precisamos adicionar o parametro `duration`, para indicar quanto em tempo a mudança de cor irá acontecer. Neste caso, 1 segundo. 

{% embed url="https://codepen.io/rubensdemelo/pen/GRNgJga" %}

Muito simples, certo ?! E o melhor de tudo é que o Flutter já nos oferece vários widgets **"Animated"**:

Alinhamento: [https://api.flutter.dev/flutter/widgets/AnimatedAlign-class.html](https://api.flutter.dev/flutter/widgets/AnimatedAlign-class.html)

Opacidade: [https://api.flutter.dev/flutter/widgets/AnimatedOpacity-class.html](https://api.flutter.dev/flutter/widgets/AnimatedOpacity-class.html)

Padding: [https://api.flutter.dev/flutter/widgets/AnimatedPadding-class.html](https://api.flutter.dev/flutter/widgets/AnimatedPadding-class.html)

Todos os widgets **animated** derivam de um [ImplicityAnimatedWidget](https://api.flutter.dev/flutter/widgets/ImplicitlyAnimatedWidget-class.html). Nela, é possível ver todos os widgets disponíveis \(ou seja, widget que implementam esta classe\).

## Conclusão

Percebeu que o Flutter se encarregou de executar a animação, após invocarmos o **`setState()`** ? Tivemos pouco ou nenhum controle sobre ela, apenas delegamos a tarefa de animar o container da cor vermelha para amarela. 

A facilidade de implementar este tipo de animação, justifica a ausência de controle. É possível melhorar a experiência do usuário com widgets animados em poucas linhas de código, como vimos acima.

E mesmo que precise controlar cada detalhe de uma animação, temos as animações explícitas disponíveis. 







