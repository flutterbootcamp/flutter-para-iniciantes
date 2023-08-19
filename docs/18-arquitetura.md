---
sidebar_position: 7
description: 'Entender a arquitetura do Flutter é importante, precisamos entender toda a "anatomia" dos nossos aplicativos.'
---

# Arquitetura

Entenda onde o seu código se "encaixa" nesta estrutura.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Seu código" label="Seu código" default>
Código do aplicativo, dependências, arquivos estáticos (imagens, fontes, etc).
  </TabItem>
  <TabItem value="flutter" label="Framework">
    O framework em si, também escrito em Dart.
  </TabItem>
  <TabItem value="embedder" label="Engine">
    Responsável por unir o seu código e o do framework e prepará-los para que sejam executados pelo hardware.
  </TabItem>
  <TabItem value="runners" label="Runners">
  Responsável por delegar e controlar as instruções binárias ao hardware.
  </TabItem>
  <TabItem value="hardware" label="Hardware">
  Não precisa de explicação né ?!
  </TabItem>
</Tabs>

![Arquitetura](/img/arquitetura.svg)

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZtrawVlMKmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>