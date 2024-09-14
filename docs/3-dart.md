---
sidebar_position: 3
description: 'Entender a arquitetura do Flutter é importante, precisamos entender toda a "anatomia" dos nossos aplicativos.'
---

# DART

É a linguagem de programação criada pelo Google e utilizada para escrever o Flutter.

Graças ao DART, o Flutter se torna um framework único, tanto para o desenvolvedor quanto para o usuário final. O desenvolvedor tem uma incrível experiência e o usuário final tem um aplicativo nativo, de alta performance.

Caso você já possua experiência com qualquer linguagem _C-style_, irá perceber que Dart é muito amigável e não terá dificuldades em aprendê-la:

- Tipada, porém isto é opcional.
- Moderna (generics\, funções, interfaces e mixins).
- High Order Functions ( forEach(), map(), etc ).
- Utiliza sintaxe _C-style_ (como C#, Javascript).
- Pode ser compilada e interpretada. _\*\*_

Tipos suportados:

- numbers
- strings
- boolean
- collections (list, set, map)
- rune ( representar UNICODE caracteres como string)
- symbols

Este [guia](https://dart.dev/guides/language/language-tour) te ajudará a se familiarizar com a linguagem antes de aprender o framework. 

O conhecimento básico proporcionado pelo guia, é suficiente para dar os primeiros passos e sentir a deliciosa experiência de construir um aplicativo Flutter.

**Este vídeo aborda alguns detalhes da linguagem:**

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/nh0h4eBM0SE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

### dartpad.dev

É um IDE online para Dart e Flutter, permitindo que você escreva, execute e compartilhe códigos diretamente em um browser. 

Ideal para aprender, afinal, o resultado da execução do código é instantâneo.

Acelera a prototipação, pois não requer configuração ou instalação.

Facilita o compartilhamento, basta criar um Github Gist com o link do dartpad.dev.

[dartpad.dev](http://dartpad.dev/)

![dartpad.dev](/img/dartpad.dev.png)

#### Este vídeo explora o poder do `dartpad.dev`:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/rgI3CgvTpu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

### hello world

```dart
void main() {
  print('Olá, Mundo!');
}
```

### Variáveis

```dart
String name = 'Voyager I';
int year = 1977;
double antennaDiameter = 3.7;
List<String> flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
Map<String, String> image = {
  'tags': 'saturn',
  'url': '//path/to/saturn.jpg'
};
```

### Tipagem opcional

```dart
//declaração explícita do tipo da variável (String)
String name = 'Voyager I';

//declaração de variável sem especificar seu tipo
var name = 'Voyager I';
```

### Inferência

Por inferência, Dart identifica o tipo da variável e nos garante todos os benefícios da tipagem estática, por isso a tal tipagem "opcional".

```dart
var name = 'Voyager I';
var year = 1977;
var antennaDiameter = 3.7;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var image = {
  'tags': 'saturn',
  'url': '//path/to/saturn.jpg'
};
```

### Controle de fluxo

```dart
if (year >= 2001) {
  print('21st century');
} else if (year >= 1901) {
  print('20th century');
}

for (var object in flybyObjects) {
  print(object);
}

for (int month = 1; month <= 12; month++) {
  print(month);
}

while (year < 2016) {
  year += 1;
}
```

### Funções

```dart
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);
```

### Tratamento de exceções

```dart
try {
  for (var object in flybyObjects) {
    var description = await File('$object.txt').readAsString();
    print(description);
  }
} on IOException catch (e) {
  print('Could not describe object: $e');
} finally {
  flybyObjects.clear();
}
```

