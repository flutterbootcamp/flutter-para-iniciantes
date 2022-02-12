---
description: Entenda a estrutura de pastas e arquivos de um projeto
---

# Anatomia de um aplicativo

Ao iniciarmos um projeto com o Flutter, a seguinte estrutura é criada:

![](../.gitbook/assets/image.png)

{% tabs %}
{% tab title="lib" %}
Contém o código Dart do aplicativo. É possível criar pastas e subpastas aqui dentro, porém o arquivo **main.dart** deve estar na raiz.&#x20;
{% endtab %}

{% tab title="main.dart" %}
O ponto de partida de qualquer aplicativo em Flutter. Dentro dele, deve conter a chamada ao método **main()**.
{% endtab %}

{% tab title="test" %}
Pasta que contém os arquivos de testes do aplicativo.
{% endtab %}

{% tab title="android/ios/linux/mac/web/windows" %}
São as pastas necessárias para executar o aplicativo em cada uma das plataformas: Android, iOS, Linux, macOS, Windows e web.
{% endtab %}

{% tab title="pubspec.yaml" %}
Este arquivo contém várias informações do aplicativo, como nome, versão, descrição, pacotes/dependências. Também contém o caminho para arquivos estáticos, como imagens e fontes.

{% hint style="danger" %}
Neste tipo de arquivo, YAML, a indentação é extremamente importante. Utiliza-se 2 espaços em branco.
{% endhint %}
{% endtab %}

{% tab title="pubspec.lock" %}
Contém metadados dos pacotes/dependências do aplicativo.
{% endtab %}

{% tab title="analysis_options.yaml" %}
Arquivos para configurar o **analyze**, a ferramenta do Dart para análise estática do código, verificando erros, alertas e lint.
{% endtab %}
{% endtabs %}

{% hint style="info" %}
A pasta .idea e o arquivo \*.iml são utilizados apenas pela IDE IntelliJ.
{% endhint %}

## main.dart

O método **main()** é o ponto de partida para todo aplicativo Flutter. O seu retorno é sempre _void_.

{% code title="main.dart" %}
```dart
void main() => runApp(MeuAplicativo());
```
{% endcode %}

A função `runApp()` recebe um widget como parâmetro, ou seja, todo nosso aplicativo também é um widget.&#x20;
