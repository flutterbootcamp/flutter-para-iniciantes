# Dart: Não tenha medo

Dart é a linguagem de programação criada pelo Google e utilizada para escrever o Flutter. É orientada à objetos e open-source.

Ela surgiu de uma necessidade do Google, que buscava uma alternativa ao Javascript, para escrever código no tanto no frontend quanto no backend. 

* Tudo o que se pode armazenar em variáveis é um [Object](https://api.dartlang.org/stable/2.2.0/dart-core/Object-class.html).
* Fortemente tipada, porém isto é opcional.
* Suporte à Generics&lt;T&gt;, funções, interfaces e mixins.
* Utiliza sintáxe _C-style_ \(como C\#, Java\).
* Dart é compilado e não interpretado

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

