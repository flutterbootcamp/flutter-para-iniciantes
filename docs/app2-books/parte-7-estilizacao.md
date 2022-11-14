---
sidebar_position: 7
---

# Parte 7 - Estilização

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/-NDhAKe2GNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Para estilizar um aplicativo em Flutter, "globalmente", ou seja, para todos os widgets, utiliza-se o `ThemeData`.

Assim, é possível definir cores, fontes, tamanhos, bordas, etc.

O aplicativo Books APP, utiliza a paleta de cores `amber`. 

E as bordas dos campos de entrada (TextField), arredondadas.

```dart
   return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.amber,
        inputDecorationTheme: const InputDecorationTheme(
          border: OutlineInputBorder(
          borderRadius: BorderRadius.all(Radius.circular(50))
          ),
        ),
      ),
      home: const HomePage(),
    );
```