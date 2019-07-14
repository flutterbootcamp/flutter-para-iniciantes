---
description: Não poderia ser diferente
---

# Hello World

Vamos escrever e entender por onde um aplicativo Flutter nasce. Vamos iniciar um novo projeto através da linha de comando do Flutter:

```bash
flutter create hello_world
```

Em poucos segundos, um novo projeto foi criado:

```text
In order to run your application, type:

  $ cd hello_world
  $ flutter run

Your application code is in hello_world\lib\main.dart.
```

{% hint style="success" %}
No VS Code, acesse a pasta **hello\_world** e digite o comando "code ." \(assim o VS code será aberto imediatamente
{% endhint %}

Como a mensagem informa, nosso aplicativo está em `hello_world\lib\main.dart` . Vamos substituir todo o conteúdo gerado pelo código abaixo: 

```dart
import 'package:flutter/widgets.dart';

void main() {
  runApp(
    Center(
      child: Text(
        'Hello, world!',
        textDirection: TextDirection.ltr,
      ),
    ),
  );
}

```

O resultado final é uma tela em toda preta, com o texto `Hello, world!` centralizado.

#### Entendendo nosso Hello World: 

| Linha | Comentário |
| :--- | :--- |
| 1 | Importação do package **widgets**, para podermos utilizarmos os widgets `Center` e `Text`. |
| 3 | O método `main()` é o ponto de partida de qualquer aplicativo. |
| 4 | Executando `runApp()`, o Flutter constroi o widget informado como parâmetro. Neste caso, um widget do tipo `Center`. |
| 5 | Declaramos que Center possui um filho do tipo `Text`. Aplica-se aqui o conceito de composição. `Text`não é do tipo `Center`. Ele compõe o widget `Center`. `Text` não herda nenhuma característica de `Center`.  |
| 6 | Declaramos o widget do tipo `Text` . |
| 7 | Precisamos informar uma string, que será o texto exibido. |
| 8 | Estamos informando que a direção do texto é _left to right_ \(esquerda para direita\). |

Finalizamos! Viu como foi simples?! 

## Agora você já possui uma boa bagagem para embarcar nesta viagem. 

Já sabe o que é o Flutter e tem bons motivos para utilizá-lo em seu próximo projeto. Viu que a linguagem Dart não é nada complicada, tem uma visão geral de todo ecossistema do Flutter e da sua arquitetura e já  escreveu o seu primeiro Hello World. 

{% hint style="warning" %}
Antes de meter a mão na massa \(de verdade\), vamos conhecer mais a fundo sobre widgets. Já que em Flutter, tudo é widget, nada melhor do que entender e dominá-los do que sermos dominado por eles. 
{% endhint %}

Partiu?!



