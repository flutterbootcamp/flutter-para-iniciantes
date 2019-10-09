---
description: >-
  Descubra como é possível com apenas 1 código-base, entregar aplicativos para
  até 4 plataformas diferentes.
---

# Arquitetura

Entender a arquitetura do Flutter é importante, precisamos entender todo a "anatomia" dos nossos aplicativos.

{% tabs %}
{% tab title="Your code" %}
Código Dart do aplicativo, códigos específicos de cada plataforma \(caso haja\), os packages e plugins \(que também são códigos Dart e/ou específicos\), imagens, fontes e qualquer outro ativo do projeto.
{% endtab %}

{% tab title="Flutter \(framework\)" %}
O framework em si, também escrito em Dart. 
{% endtab %}

{% tab title="Flutter \(engine\)" %}
O motor responsável por unir o seu código e o do framework e prepará-los para que sejam executados pelo hardware.

Utiliza a biblioteca [Skia](https://skia.org) e o mesmo processador de textos do Google Chrome.
{% endtab %}

{% tab title="Runners" %}
Responsável por delegar e controlar as instruções binárias ao hardware.
{% endtab %}

{% tab title="Hardware" %}
Não precisa de explicação né ?!
{% endtab %}
{% endtabs %}

![](.gitbook/assets/dart-arquitetura.png)

{% hint style="info" %}
Durante o desenvolvimento, o seu código Dart é interpretado \(JIT\), possibilitando assim o hot reload e hot restart.
{% endhint %}

{% hint style="danger" %}
Ao gerar a versão final de um aplicativo, o código Dart é compilado \(AOT\) para bibliotecas arm/x86 e executado diretamente pelo hardware e isto é o que garante a alta performance.
{% endhint %}

## Flutter framework:

Se colocarmos uma lupa nas camadas azul escuro e verde da imagem anterior, teremos os seguintes detalhes:

{% hint style="info" %}
A camada azul anterior, na imagem abaixo é representada pela verde. 

A camada verde anterior, na imagem abaixo é representada pela azul.
{% endhint %}

![](.gitbook/assets/0-neejq8pwkitj8emf..png)

O framework em si, é construído sobre a Engine \(C++\) e é puramente código Dart. 

{% hint style="info" %}
Podemos acessar cada uma das classes e ver como um botão ou o switch é implementado.
{% endhint %}

