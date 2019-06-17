---
description: >-
  É a linguagem de programação criada pelo Google e utilizada para escrever o
  Flutter. Se você já conhece Javascript, Java, C#, vai se sentir em casa.
---

# Dart: Não tenha medo

Flutter sofre algumas críticas pelo fato de utilizar Dart, mas é graças à ela que ele se torna um framework único, tanto para o desenvolvedor quanto para o usuário final. O desenvolvedor tem uma incrível [experiência](developer-experience.md) e o usuário final tem um aplicativo nativo, de alta performance.

Caso você já possua experiência com qualquer linguagem _C-style_, irá perceber que Dart é muito amigável e não terá dificuldades em aprende-la.

Recomendo o estudo deste [guia](https://dart.dev/guides/language/language-tour), aqueles que gostam de se familiarizar com a linguagem antes de aprender o framework. Particularmente, não vejo necessidade de se aprofundar para começar. O conhecimento básico, proporcionado pelo guia, é suficiente para dar os primeiros passos e sentir deliciosa experiência de construir um aplicativo bacana.

À medida que avançarmos com o conteúdo, você irá aprender Dart aos poucos, não se preocupe.

Algumas características da linguagem:

* Tipada, porém isto é opcional.
* Morderna \(generics&lt;T&gt;, funções, interfaces e mixins\).
* High Order Functions \( forEach\(\), map\(\), etc \).
* Utiliza sintáxe _C-style_ \(como C\#, Javascript\).
* Pode ser compilada e interpretada. ****

Tipos suportados:

* numbers
* strings
* boolean
* list
* set
* map
* rune \( representar UNICODE caracteres como string\)
* symbols

## Exemplos

#### Hello World :

```dart
void main() {
  print('Olá, Mundo!');
}
```

#### Declarando variáveis, sem utilizar tipagem :

```dart
var name = 'Voyager I';
var year = 1977;
var antennaDiameter = 3.7;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};
```

#### Declarando variáveis utilizando tipagem :

```dart
String name = 'Voyager I';
int year = 1977;
double antennaDiameter = 3.7;
List<String> flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
Map<String, String> image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};
```

{% hint style="warning" %}
Sobre a tipagem opicional, gostaria de reforçar o seguinte ponto:
{% endhint %}

```dart
//declaração explícita do tipo da variável (String)
String name = 'Voyager I';

//declaração de variável sem especificar seu tipo
var name = 'Voyager I';
```

{% hint style="info" %}
#### Por inferência, Dart identifica o tipo da variável e nos garante todos os benefícios da tipagem estática, por isso a tal tipagem "opcional".
{% endhint %}

#### Controle de fluxo :

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

#### Funções :

```dart
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);
```

#### Tratamento de exceções :

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

