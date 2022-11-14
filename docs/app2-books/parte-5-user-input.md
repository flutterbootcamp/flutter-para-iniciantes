---
sidebar_position: 5
---

# Parte 5 - User Input 

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/tZVJeN7ULh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Para capturar a entrada do usuário, utiliza-se `TextField`.

Também é necessário adicionar um `TextEditingController`, pois é através desta classe que conseguimos obter o valor digitado pelo usuário.

```dart
  final _controller = TextEditingController();
  var titulo = "";
  ...
  //dentro da ListView, o TextField é inserido
   TextField(controller: _controller),
```