---
sidebar_position: 3
---

# Parte 2 - Tela inicial

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