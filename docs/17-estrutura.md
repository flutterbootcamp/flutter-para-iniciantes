---
sidebar_position: 17
---

# Estrutura

Ao iniciarmos um projeto com o Flutter, a seguinte estrutura é criada:

![Estrutura](/img/estrutura.png)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="lib" label="ib" default>
    Contém o código Dart do aplicativo. É possível criar pastas e subpastas aqui dentro, porém o arquivo **main.dart** deve estar na raiz.&#x20;
  </TabItem>
  <TabItem value="main" label="main.dart">
    O ponto de partida de qualquer aplicativo em Flutter
  </TabItem>
  <TabItem value="test" label="test">
    Arquivos de testes do aplicativo.
  </TabItem>
  <TabItem value="android-ios-linux-mac-web-windows" label="Plataformas">
    As pastas <code>android/ios/linux/mac/web/windows</code> são necessárias para executar o aplicativo em cada uma das plataformas.
  </TabItem>
  <TabItem value="pubspec.yaml" label="pubspec.yaml">
Informações do aplicativo, como nome, versão, dependências e imagens.
  </TabItem>
    <TabItem value="pubspec.lock" label="pubspec.lock">
Metadados das dependências do aplicativo.
  </TabItem>
      <TabItem value="analysis_options.yaml" label="analysis_options.yaml">
  Configuração do **Analyzer**, a ferramenta para análise estática do código, verificando erros, alertas e lint.
  </TabItem>
</Tabs>

:::tip main.dart

O método **main()** é o ponto de partida para todo aplicativo Flutter. O seu retorno é sempre _void_.

```dart
void main() => runApp(MeuAplicativo());
```
:::

A função `runApp()` recebe um widget como parâmetro, ou seja, todo nosso aplicativo também é um widget.