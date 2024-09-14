---
sidebar_position: 5
description: Vamos falar sobre a experiência de desenvolver com Flutter
---

# Developer Experience

No universo da programação, sempre que surge uma nova linguagem/framework/tecnologia, é comum enaltecer os seus benefícios e os problemas à que se propõe resolver, mas pouco se fala sobre como as coisas são "do nosso lado". Desde o princípio, um dos grandes destaques do Flutter tem sido as funcionalidades que facilitam \(e muito!\) o nosso trabalho. 

Lembra que o primeiro dos três pilares é o desenvolvimento rápido? Pois bem, graças ao [hot reload](https://flutter.dev/docs/development/tools/hot-reload) e ao hot restart, temos uma experiência incrível ao desenvolver um app. 


## Hot reload

As alterações realizadas no código são refletidas em até 0,5s \(no emulador ou aparelho\) e sem perder o estado da aplicação, o que é muito importante. Imagine um fluxo de carrinho de compras em que precisamos alterar a mensagem de "compra realizada com sucesso": 

:::

adicionar os produtos -> proceder para o checkout -> realizar o pagamento -> "compra realizada com sucesso"

:::

Percorrer todo esse fluxo à cada alteração para verificar o resultado final irá consumir bastante tempo. Mas não com Flutter, utilizando o hot reload.

As alterações realizadas no código são refletidas em até 0,5s (no emulador ou aparelho), sem perder o estado da aplicação, o que é muito importante. Imagine um fluxo de carrinho de compras em que precisamos alterar a mensagem "compra realizada com sucesso", após adicionar os produtos, proceder ao checkout e realizar o pagamento. Percorrer todo esse fluxo a cada alteração para verificar o resultado final consumiria bastante tempo. Mas não com o Flutter, utilizando o hot reload.

## Hot restart

Quando o aplicativo é reinicializado, ou seja, perde-se o estado atual, todo o processo ocorre em menos de 2s. Alguns tipos de alterações exigem que seja feito um hot restart.

## Como a mágica acontece?

Quando alteramos o código, a Dart VM \(virtual machine\) consegue identificar esta alteração e sobrepõe a classe antiga com esta nova, portanto, apenas aquela parte alterada será reconstruída.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XiHGg1ZyTiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>