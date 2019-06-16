---
description: >-
  Widgets, widget tree packages, hot-reload, pub.dev, etc. Nada disso será
  novidade à partir de agora.
---

# Visão Geral

É importante entender alguns conceitos, termos antes de cairmos de cabeça no framework. Provavelmente, quando você pesquisar sobre Flutter, encontrará a seguinte afirmação: 

> #### "In Flutter, everything is a widget" \(No Flutter, tudo é um widget\).

**Widget:** É um componente do seu aplicativo, seja um botão, um ícone, um texto, uma imagem, etc. Ao final, vários widgets irão compor o nosso aplicativo. E a pronúncia é _uidjêt_.

**Widget tree:** É a estrutura que representa como nossos widgets estão organizados. Conforme os widget vão sendo criados/destruídos, a árvore de widget também vai sofrendo alterações. Assim como em uma página web temos o [DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM), no Flutter, temos a widget tree.

{% hint style="info" %}
Este conceito é importante e iremos apronfundá-lo quando aprendermos sobre gerenciamento de estado.
{% endhint %}

[pub.dev](https://pub.dev): Gerenciador de pacotes da linguagem Dart.

**Package:** Um módulo/pacote, puramente com código Dart. 

**Plugin:** Contém código específico da plataforma \(java/kotlin, swift/obj-c\), geralmente faz acesso à algum recurso nativo, como bateria, câmera.

**Material package:** Conjuntos de widgets que seguem as definições do Material Design;

**Cupertino package:** Conjunto de widgets que seguem as definições de interface do iOS.

## Declarative UI

Este conceito merece um destaque especial, pois muda a forma como estamos acostumados a construir interfaces. Apesar de não ser um conceito novo, vem sendo cada vez mais adotado  e ganhando popularidade na comunidade, devido à facilidade que ele proporciona, não só de construir, como também em entender noss interface.

Com a imagem abaixo, ficará mais fácil acompanhar a explicação:

![Fonte: https://flutter.dev/docs/development/data-and-backend/state-mgmt/declarative](.gitbook/assets/ui-equals-function-of-state-54b01b000694caf9da439bd3f774ef22b00e92a62d3b2ade4f2e95c8555b8ca7.png)

Nossa interface, reflete o estado da nossa aplicação. Sempre que o estado da aplicação muda, os widgets são reconstruídos para atender aquele novo estado. Seja um botão ou ícone que muda de cor após ser pressionado ou até mesmo toda uma tela após o usuário logar no aplicativo.

## Composição &gt; Herança

Entender a diferença entre composição sobre herança, no contexto de um aplicativo em Flutter, facilitará o entendimento de como os widgets se relacionam.

**Composição:** Widget X possui o widget Y.

**Herança:** Widget X é um widget Y \(já que X é filho de Y\).

Lembrando que widgets são pequenos "blocos", fica simples de entender o motivo de Flutter utilizar esse conceito. Conforme formos montando vários blocos, nosso aplicativo vai tomando forma. Esta montagem dos blocos é a composição.

Vamos ver na prática como isso funciona:

{% hint style="info" %}
Fique tranquilo caso não tenha compreendido 100% estes dois conceitos. Ao decorrer do livro, conforme formos criando nossos aplicativos, ficará fácil de entender. Nada melhor do que a mão na massa para solidificar o aprendizado.
{% endhint %}

