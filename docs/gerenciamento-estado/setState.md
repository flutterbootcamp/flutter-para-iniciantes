---
sidebar_position: 3
---

# setState()

Com certeza este será o seu primeiro contato com alterações de estado em um aplicativo Flutter. O famoso método `setState()`, que é exclusivo ao widgets do tipo [Stateful](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html). Ao adicionar interatividade em um aplicativo, ele é o mais simples, básico e fácil de entender.

Quando criamos um novo projeto em Flutter o exemplo inicial é um aplicativo que quando pressionamos um botão, incrementa a quantidade de vezes que o botão foi pressionado:

```dart
var contador = 0;
setState(() {
  contador ++;
});
```

Ao chamar o método `setState()`, nosso widget será reconstruído já com o novo valor da variável `contador` tendo sido incrementado.

Não tem segredo nenhum aqui, seja incrementando uma variável, fazendo uma requisição à uma API ou qualquer outro evento que altere o estado do nosso widget basta invocar o método `setState()` para que ele seja reconstruído para representar o seu novo estado.

O grande problema com ele é que à medida que o aplicativo for crescendo e ganhando complexidade, pode ser necessário alterações em vários widgets diferentes, e controlar as chamadas do `setState()` em todas elas acaba ficando inviável. Não que seja **impossível** utilizar esta opção, mas deve-se estar bem maduro para escolhe-la como única forma de gerenciamento de estado.

O `setState()` é ideal para o estado **local** de um widget, como marcar/desmarcar um checkbox/switch. Para o estado **global** da aplicação \(ex: usuário logado, carrinho de compras\) há outras opções mais robustas e que permitem atualizar vários widgets quando o estado sofrer alterações.

