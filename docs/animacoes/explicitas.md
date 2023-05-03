---
sidebar_position: 3
---

# Explícitas

É o mais poderoso tipo de animação com Flutter. Você tem o total controle sobre ela: iniciar, parar, repetir, reverter... não importa o "movimento".

São úteis para criar animações complexas e personalizadas. 

:::tip

Os comandos para da animação devem ser explícitos.

Para ter todo este controle é necessário escrever mais código. Vamos lá!

- Mixin necessário para acompanhar a passagem do tempo;

```dart
extends State<HomePage> with SingleTickerProviderStateMixin
```

- Crie a animação e um controlador para ela;

```dart
late Animation<double> animation;
late AnimationController controller;
```

- Inicialize a animação e o seu controlador. Neste caso, a animação muda o valor de 50 para 400 em 2 segundos;

```dart
  @override
  void initState() {
    super.initState();
    controller =
        AnimationController(duration: const Duration(seconds: 2), vsync: this);
    animation = Tween<double>(begin: 50, end: 400).animate(controller);
    animation.addListener(() {
      setState(() {});
    });
  }
```

- Através do controlador, é possível ter controle absoluto sobre a animação:

```dart
controller.reset();    //reiniciar
controller.repeat();   //repetir
controller.forward();  //avançar
controller.stop();     //parar
```


- Criando um `Container` com animação explícita:

```dart
@override
Widget build(BuildContext context) {
  return Container(
    width: animation.value,
    height: 100,
    color: Colors.blue,
  );
}
```
- Lembre-se de liberar os recursos que foram alocados;

```dart
 @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }
````

<div class="video-container">
<iframe width="560" height="315" src="https://dartpad.dev/?id=b522b75df13f5b58a2f17eb53c20570b" title="DartPad animação explícita" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>