---
description: >-
  Widgets, widget tree packages, hot-reload, pub.dev, etc. Nada disso será
  novidade à partir de agora.
---

# Visão Geral

É importante entender alguns conceitos, termos antes de cairmos de cabeça no framework. Provavelmente, quando você pesquisar sobre Flutter, encontrará a seguinte afirmação: 

> #### "In Flutter, everything is a widget" \(No Flutter, tudo é um widget\).

> **"In Flutter, everything is a widget / No Flutter, tudo é um widget"**

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

