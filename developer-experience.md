---
description: Vamos falar sobre a experiência de desenvolver com Flutter
---

# Developer Experience

No universo da programação, sempre que surge uma nova linguagem/framework/tecnologia, é comum enaltecer os seus benefícios e os problemas à que se propõe resolver, mas pouco se fala sobre como as coisas são "do nosso lado". Desde o princípio, um dos grandes destaques do Flutter ficavam para as funcionalidades que facilitam \(e muito!\) o nosso trabalho. Lembra que o primeiro dos três pilares é o desenvolvimento rápido? Pois bem, graças ao [hot reload](https://flutter.dev/docs/development/tools/hot-reload) e ao hot restart, nós temos uma experiência incrível. 

## Hot reload

Alterações realizadas no código são refletidas em até 0,5s \(no emulador ou aparelho\) e sem perder o estado da aplicação, o que é muito importante. Imagine um fluxo de carrinho de compras e que precisamos alterar a mensagem de compra realizada com sucesso, após adicionar os produtos, proceder para o checkout e realizar o pagamento. Percorrer todo esse fluxo à cada alteração para verificar o resultado final irá consumir bastante tempo. Mas não com Flutter, utilizando o hot reload.

{% hint style="info" %}
Reloaded 3 of 505 libraries in 316ms.
{% endhint %}

## Hot restart

Aqui, o aplicativo é reinicializado, ou seja, perde-se o estado atual. Todo o processo ocorre em menos de 2s. Alguns tipos de alterações exigem que seja feito um hot restart.

{% hint style="info" %}
Restarted application in 1.768ms.
{% endhint %}

## Como a mágica acontece?

Quando alteramos o código, a Dart VM \(virtual machine\) consegue identificar esta alteração e sobrepõe a classe antiga com esta nova, portanto, apenas aquela parte alterada será reconstruída.

