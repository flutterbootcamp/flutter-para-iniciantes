---
sidebar_position: 4
---

# Parte 3 - Favoritos

O ListTile agora está completo.

```dart
return ListTile(
title: Text(listaAtracoes[index].nome),
subtitle: Wrap(
    spacing: 8,
    runSpacing: 4,
    children: listaAtracoes[index]
        .tags
        .map((tag) => Chip(label: Text('#$tag')))
        .toList(),
),
leading: CircleAvatar(
    child: Text('${listaAtracoes[index].dia}'),
),
trailing: IconButton(
    onPressed: () {},
    icon: Icon(Icons.favorite),
),
);
```