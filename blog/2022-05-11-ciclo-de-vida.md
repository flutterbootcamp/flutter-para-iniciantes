---
slug: ciclo-de-vida
title: Ciclo de vida
authors: rubensdemelo
tags: [flutter, stateless, stateful, tutorial, ciclo-de-vida]
---

Neste post, vamos explorar um dos conceitos mais importantes para quem está começando com Flutter: o ciclo de vida dos widgets.

Voçe já deve saber que em Flutter, tudo é um widget e que temos 2 tipos: Stateless e o Stateful.

E a diferença entre eles é o objeto State, pois ele confere ao Stateful o poder da mutação enquanto o Stateless permanece imutável.

O construtor destes widgets tem a mesma estrutura:

```dart
class GreenFrog extends StatelessWidget {
  const GreenFrog({ Key? key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(color: const Color(0xFF2DBD3A));
  }
}
```

```dart
class YellowBird extends StatefulWidget {
  const YellowBird({ Key? key }) : super(key: key);

  @override
  State<YellowBird> createState() => _YellowBirdState();
}
```

Ambos aos serem implementados, fazem override diferentes: método `build` no Stateless e o Stateful faz do `createState()`, nos obrigando à implementar `_YellowBirdState()`.

E nele nós temos o seguinte código: 

```dart
class _YellowBirdState extends State<YellowBird> {
  @override
  Widget build(BuildContext context) {
    return Container(color: const Color(0xFFFFE306));
  }
}
```

 E é aqui que a mágica acontece. Graças ao objeto `State`, podemos mudar a cor do Container de <span style={{backgroundColor: '#FFE306'}}>amarelo</span> para <span style={{backgroundColor: '#FF0000'}}>vermelha</span>, usando o `setState()`. Algo impossível de se fazer em no GreenFrog, que possui a cor <span style={{backgroundColor: '#2DBD3A'}}>verde</span> e por ser um Stateless widget, é imutável. 

Até aqui deduzimos então que:

:::tip

**Stateless** e **Stateful** widgets possuem o mesmo ciclo de vida. Quando o construtor é invocado, eles executam o mesmo override.

:::

E como vimos anteriormente, o Stateful possui o override ao método `createState()` e que o retorno é um objeto State. 

E é exatamente aqui que aprofundamos quando se trata do “ciclo de vida dos widgets”. 

Sendo bem rigorosos, podemos afirmar que o “ciclo de vida”, portanto, trata-se do objeto State e não do Stateless/Stateful.

Sendo menos rigorosos, podemos afirmar que o “ciclo de vida” de um Stateful é mais amplo, pois envolve também o objeto `State`, afinal, não é possível criar um Stateful sem ter um objeto State.  

No próximo post, iremos abordar os métodos o `initState` e o `dispose`, pois são eles que acompanham a criação e destruição do objeto State (do Stateful widget).