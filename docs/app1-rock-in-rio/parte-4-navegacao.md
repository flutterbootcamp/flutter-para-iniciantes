---
sidebar_position: 5
---

# Parte 4 - Navegação

Precisamos de uma estrutura para armazenar as atrações que foram favoritadas pelo usuário. 

Neste caso, uma lista resolve o problema. Pois assim, adicionamos e removemos os items desta lista, de acordo com a açao do usuário (favoritar / remover).

```dart

final List<Atracao> _listaFavoritos = [];

return Scaffold(
    ...
    body: ListView.builder(
    itemCount: listaAtracoes.length,
    itemBuilder: (context, index) {
        final isFavorito = _listaFavoritos.contains(listaAtracoes[index]);
        return ListTile(
            ...
            trailing: IconButton(
                onPressed: () {
                setState(() {
                    if (isFavorito) {
                        _listaFavoritos.remove(listaAtracoes[index]);
                    } else {
                        _listaFavoritos.add(listaAtracoes[index]);
                    }
                });
            },
            icon: isFavorito
                ? const Icon(Icons.favorite, color: Colors.red)
                : const Icon(Icons.favorite_border),
        );
```



<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/6h-fOx0wRQU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>