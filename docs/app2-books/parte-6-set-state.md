---
sidebar_position: 6
---

# Parte 6 - setState

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qqXmUjeS030" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


A variável `itemCount` foi criada e inicializada com o valor `0`.

Então, o seu valor é atualizado após a consulta a API ter retornado o `totalItems`.

Ao invocar o setState(), o Flutter irá reconstruir o widget, com o novo valor de `itemCount`.

Assim, a tela é atualizada sempre que uma nova consulta for feita.

```dart
    var itemCount = 0;
  
  //antes
    if (response.statusCode == 200) {
       final jsonResponse = convert.jsonDecode(response.body);
       final itemCount = jsonResponse['totalItems'];
    ...
    Text(
       'Foram encontrados X livros sobre $titulo ',

    //depois
    if (response.statusCode == 200) {
       final jsonResponse = convert.jsonDecode(response.body);
       itemCount = jsonResponse['totalItems'];
       setState((){});
    ...
    Text(
    'Foram encontrados $itemCount livros sobre $titulo ',
```