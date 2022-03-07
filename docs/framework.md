---
sidebar_position: 8
description:
  'Entenda o framework e como seu código se conecta com ele' 
---

# Framework

Esta organização em camadas, possibilita que cada uma delas seja independente. Compostas por diferentes pacotes, que podem ser extendidos e também substituídos.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="framework" label="Framework" default>
    Esta é a camada que nós interagimos, consumindo as APIs já disponíveis.
  </TabItem>
  <TabItem value="engine" label="Engine">Com APIs de baixo-nível, ela é responsável por "pintar" as telas e também compilar o código Dart em instruções nativas de cada plataforma.
    
  </TabItem>
  <TabItem value="embedder" label="Embedder">
    Responsável por interagir com o sistema operacional. 
  </TabItem>
</Tabs>



![Framework](/img/framework.svg)
