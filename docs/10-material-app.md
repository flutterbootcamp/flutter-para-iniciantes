---
sidebar_position: 10
---

# MaterialApp

É a raiz de um aplicativo Flutter, fornecendo uma estrutura base para: 

**Navegação:** Todas as rotas são gerenciadas pelo `MaterialApp`, facilitando a navegação entre diferentes telas. Logo, a "página inicial" também é definida aqui.

**Estilização:** Cores, fontes, textos e todos os outros widgets visuais são descendentes de um `MaterialApp`. Ele se utilizada das definicões do [Material Design](https://m3.material.io), sendo assim, visualmente o seu aplicativo já ter

**Internacionalização:** Se o aplicativo suportar mais de 1 idioma, precisa também ter a configuração feita no `MaterialApp`. Por padrão, o idioma definido é o `en-US`. Utilizando o código abaixo, o nosso idioma entra em ação. 

```dart
return MaterialApp(
    ...
    locale: const Locale('pt', 'BR'),
    ...
);
```
#### Este vídeo aborda o `MaterialApp` em detalhes:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/F8peN8flxoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
