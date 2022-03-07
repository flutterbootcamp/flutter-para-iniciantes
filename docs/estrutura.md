---
sidebar_position: 9
---

# Estrutura

Ao iniciarmos um projeto com o Flutter, a seguinte estrutura é criada:

![Navegação](/img/estrutura.png)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="lib" label="ib" default>
    Contém o código Dart do aplicativo. É possível criar pastas e subpastas aqui dentro, porém o arquivo **main.dart** deve estar na raiz.&#x20;
  </TabItem>
  <TabItem value="main" label="main.dart">O ponto de partida de qualquer aplicativo em Flutter. Dentro dele, deve conter a chamada ao método **main()**.
    
  </TabItem>
  <TabItem value="test" label="test">
Pasta que contém os arquivos de testes do aplicativo.
  </TabItem>
  <TabItem value="android-ios-linux-mac-web-windows" label="Plataformas">
  As pastas <code>android/ios/linux/mac/web/windows</code> são necessárias para executar o aplicativo em cada uma das plataformas.
  </TabItem>
  <TabItem value="pubspec.yaml" label="pubspec.yaml">
Este arquivo contém várias informações do aplicativo, como nome, versão, descrição, pacotes/dependências. Também contém o caminho para arquivos estáticos, como imagens e fontes.
  </TabItem>
    <TabItem value="pubspec.lock" label="pubspec.lock">
Contém metadados dos pacotes/dependências do aplicativo.
  </TabItem>
      <TabItem value="analysis_options.yaml" label="analysis_options.yaml">
Arquivos para configurar o **analyze**, a ferramenta do Dart para análise estática do código, verificando erros, alertas e lint.
  </TabItem>
</Tabs>

:::tip main.dart

O método **main()** é o ponto de partida para todo aplicativo Flutter. O seu retorno é sempre _void_.

```dart
void main() => runApp(MeuAplicativo());
```
:::

A função `runApp()` recebe um widget como parâmetro, ou seja, todo nosso aplicativo também é um widget.