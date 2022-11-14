---
sidebar_position: 4
---

# Parte 4 - Consumindo API

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/III-4wW8efg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

O método abaixo é o responsável por consultar na API do Google Books, utilizando as palavras-chave `async` e `await`.

```dart
void _buscarLivros() async {
    final url = Uri.https(
      'www.googleapis.com',
      '/books/v1/volumes',
      {'q': '{http}'},
    );
    final response = await http.get(url);

    if (response.statusCode == 200) {
      final jsonResponse = convert.jsonDecode(response.body);
      final itemCount = jsonResponse['totalItems'];
      print('Number of books about HTTP: $itemCount.');
    } else {
      print('Request failed with status: ${response.statusCode}.');
    }
  }
```
















  