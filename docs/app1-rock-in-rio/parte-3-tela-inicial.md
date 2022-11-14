---
sidebar_position: 3
---

# Parte 3 - Tela inicial

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ozQlgsk0UXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

A principal parte desta mudança é exibir o ListTile.

```dart
body: ListView.builder(
  itemCount: listaAtracoes.length,
  itemBuilder: (context, index) {
    return ListTile(
      title: Text(listaAtracoes[index].nome),
    );
  },
),
```

