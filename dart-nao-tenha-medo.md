---
description: >-
  É a linguagem de programação criada pelo Google e utilizada para escrever o
  Flutter. É orientada à objetos, open-source.
---

# Dart: Não tenha medo

 À medida que avançarmos com o conteúdo, você irá aprender aprender aos poucos, não se preocupe.

* Tipada, porém isto é opcional.
* Morderna \(generics&lt;T&gt;, funções, interfaces e mixins\).
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
  print('Hello, World!');
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

