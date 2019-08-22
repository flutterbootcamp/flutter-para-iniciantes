---
description: 'Básico e fácil, enquanto o aplicativo é pequeno.'
---

# setState\(\)

Com certeza este será o seu primeiro contato ao adicionar interatividade em um aplicativo. É o mais simples, básico e fácil de entender.

Ao criar um novo projeto em Flutter o exemplo inicial é um aplicativo que quando pressionamos um botão, incrementa o número de quantas vezes aquele botão foi pressionado.

```text
var contador = 0;
setState(() {
  contador ++;
});
```

Ao chamar o método setState, nosso widget será recontruído e com isso o novo valor da variável contador. 

