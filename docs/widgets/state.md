---
sidebar_position: 4
---

# State

Vamos analisar com calma o ciclo de vida de um objeto [State](https://api.flutter.dev/flutter/widgets/State-class.html).

![State](/img/state.png)

Pode parecer complicado, porém é mais simples do que você imagina. Todo este ciclo é necessário para que o método [setState()](https://api.flutter.dev/flutter/widgets/State/setState.html) cumpra o seu papel, que é notificar nosso widget que ele precisa ser reconstruído (ter seu método [build()](https://api.flutter.dev/flutter/widgets/State/build.html) executado novamente).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="initState" label="initState" default>

[initState](https://api.flutter.dev/flutter/widgets/State/initState.html): Chamado **apenas 1 única vez**, na criação no widget**.** Quando o widget é **inserido** na _widget tree_.

</TabItem>
<TabItem value="build" label="build">

[build](https://api.flutter.dev/flutter/widgets/State/build.html): Chamado em diferentes situações. Sempre que o widget precisar ser reconstruído ou após o [initState()](https://api.flutter.dev/flutter/widgets/State/initState.html) ou após a função[ setState()](https://api.flutter.dev/flutter/widgets/State/setState.html) e até mesmo quando o widget for [removido](https://api.flutter.dev/flutter/widgets/State/deactivate.html) da widget tree para ser inserido em outro ponto (isto ficará mais claro quando construirmos nosso primeiro app).

</TabItem>
<TabItem value="dispose" label="dispose">

[dispose](https://api.flutter.dev/flutter/widgets/State/dispose.html): Chamado quando o widget for **removido** da widget tree **permanentemente**.

</TabItem>
<TabItem value="setState" label="setState">

[setState](https://api.flutter.dev/flutter/widgets/State/setState.html): Responsável por notificar nosso widget que o estado interno foi alterado. Por exemplo, ao concluir uma requisição HTTP, queremos exibir estas informações na tela. Para isso, preenchemos nossa tela com as informações recebidas e invocamos a função [setState()](https://api.flutter.dev/flutter/widgets/State/setState.html).

</TabItem>
<TabItem value="didUpdateWidget" label="didUpdateWidget">

[didUpdateWidget](https://api.flutter.dev/flutter/widgets/State/didUpdateWidget.html): Sempre que o seu widget sofrer alterações, este método é chamado e executado antes do [build()](https://api.flutter.dev/flutter/widgets/State/build.html). Ou seja, sempre que chamar o [setState()](https://api.flutter.dev/flutter/widgets/State/setState.html), este método é executado. Pode ser útil ao lidar com animações e/ou quando precisar ter acesso ao estado antigo do widget.

</TabItem>
</Tabs>

:::tipo 
Cada um dos métodos acima são executados em momentos diferentes. Cada um deles possui responsabilidades e comportamentos diferentes, logo, devemos utilizá-los da maneira correta.
:::

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/lEwYr93rjIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>