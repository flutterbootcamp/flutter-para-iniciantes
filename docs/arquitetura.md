---
sidebar_position: 8
description: 'Entender a arquitetura do Flutter é importante, precisamos entender toda a "anatomia" dos nossos aplicativos.'
---

# Arquitetura

Entender a arquitetura do Flutter é importante, precisamos entender onde o nosso código se "encaixa" nesta estrutura.

![Arquitetura](/img/arquitetura.svg)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Seu código" label="Seu código" default>
Código Dart do aplicativo, códigos específicos de cada plataforma, dependências, quaisquer outros arquivos estáticos do projeto (imagens, fontes, etc).
  </TabItem>
  <TabItem value="flutter" label="Framework">
    O framework em si, também escrito em Dart.
  </TabItem>
  <TabItem value="embedder" label="Engine">
    O motor responsável por unir o seu código e o do framework e prepará-los para que sejam executados pelo hardware.

Utiliza a biblioteca [Skia](https://skia.org) e o mesmo processador de textos do Google Chrome.
</TabItem>
<TabItem value="runners" label="Runners">
Responsável por delegar e controlar as instruções binárias ao hardware.
</TabItem>
<TabItem value="hardware" label="Hardware">
Não precisa de explicação né ?!
</TabItem>
</Tabs>


<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZtrawVlMKmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>