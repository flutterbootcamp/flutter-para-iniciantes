---
sidebar_position: 19
description:
  'Entenda o framework e como seu código se conecta com o Flutter'
---

# Framework

Esta organização em camadas, possibilita que cada uma delas seja independente. Compostas por diferentes pacotes, que podem ser extendidos e também substituídos.

![Framework](/img/framework-layer.svg)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FrameworkSvg from '/img/framework.svg';
import EngineSvg from '/img/engine.svg';
import EmbedderSvg from '/img/embedder.svg';

<Tabs>
  <TabItem value="framework" label="Framework" default>
    APIs prontas para serem utilizadas no aplicativo.
    <FrameworkSvg/>
  </TabItem>  
  <TabItem value="engine" label="Engine">
  Compila o código Dart em instruções binárias.
    <EngineSvg/>
  </TabItem>
  <TabItem value="embedder" label="Embedder">
    Interage com o sistema operacional. 
    <EmbedderSvg/>
  </TabItem>
</Tabs>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/15UhiZPL56s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>