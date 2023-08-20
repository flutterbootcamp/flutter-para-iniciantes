---
sidebar_position: 22
---

# Navegação

Utiliza-se o conceito de [pilha](https://pt.wikipedia.org/wiki/Pilha\_\(inform%C3%A1tica\)) (stack) para executar a navegação no Flutter.

Para manipular a "pilha", existe o widget [Navigator](https://api.flutter.dev/flutter/widgets/Navigator-class.html). Com o princípio de  **"o último que entra é o primeiro que sai"**, as operações de **push** e **pop**, adicionam e removem as telas da "pilha" de navegação.

![Navegação](/img/navegacao.svg)

Código de como é a implementação:

```dart
ElevatedButton(
  onPressed: () {
    //push() 'empurra' a DetailPage para o topo da pilha
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => DetailPage()),
    );
  },
)
```
[**Push**](https://api.flutter.dev/flutter/widgets/Navigator/push.html): Para navegar até **DetailPage**, utiliza-se o método `push()`.

```dart
ElevatedButton(
  onPressed: () {
    //pop() 'remove' a DetailPage para o topo da pilha
    Navigator.pop(context);
}
```

[**Pop**](https://api.flutter.dev/flutter/widgets/Navigator/pop.html): Para voltar à página anterior, utiliza-se o método `pop()`.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/IFS7DWnE3-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Exemplo de código completo no [DartPad](https://dartpad.dev/?id=ce72becd4fbd8a40dbeb819c31321c3e).