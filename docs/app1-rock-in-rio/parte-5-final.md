---
sidebar_position: 6
---

# Parte 5 - Final

Adicionado a navegação para `AtracaoPage`, utilizando a função `onTap` do `ListTile`. 

É necessário informar também qual é a atração que iremos detalhar, ou seja, qual foi atração selecionada pelo usuário.

```dart
return ListTile(
    ...
    onTap: () {
        Navigator.push(
            context,
            MaterialPageRoute(
                builder: (context) =>
                    AtracaoPage(atracao: listaAtracoes[index])));
    },
);
```

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/I61FkVKTxO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>