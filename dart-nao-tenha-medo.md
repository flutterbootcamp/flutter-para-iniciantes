# Dart: Não tenha medo

Dart é a linguagem de programação criada pelo Google e utilizada para escrever o Flutter. É orientada à objetos e open-source.

Ela surgiu de uma necessidade do Google, que buscava uma alternativa ao Javascript, para escrever código no tanto no frontend quanto no backend. 

* Tudo o que se pode armazenar em variáveis é um [Object](https://api.dartlang.org/stable/2.2.0/dart-core/Object-class.html).
* Fortemente tipada, porém isto é opcional.
* Suporte à Generics&lt;T&gt;, funções, interfaces e mixins.
* Utiliza sintáxe _C-style_ \(como C\#, Java\).

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

