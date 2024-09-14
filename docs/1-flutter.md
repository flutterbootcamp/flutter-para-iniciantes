---
sidebar_position: 1
slug: /flutter
title: Flutter
description: O que é o Flutter, por que utilizá-lo, origem e evolução
keywords: [flutter, desenvolvimento de aplicativos, multiplataforma, google]
---

## O que é

No site oficial, a definição do Flutter é a seguinte:

**"Flutter transforma o processo de desenvolvimento de aplicativos. Construa, teste e implante belos aplicativos móveis, web, desktop e embarcados de alta qualidade a partir de um único código-fonte"**

Em resumo: você escreve o código uma única vez e o seu aplicativo poderá ser executado em até seis plataformas diferentes.

Utilizando a linguagem Dart \(que também foi criada pelo Google\), Flutter proporciona uma experiência incrível tanto para desenvolvedores quanto para usuários.

Até a versão 1.2, Flutter era focado em entregar apps para iOS e Android. No entanto, com o lançamento da versão 1.5 foi lançada, durante o Google I/O 2019, o post oficial anunciava: **"Flutter não é mais um framework mobile, mas um framework multi-plataforma."**

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/QGNrR4Ffqb4" title="Flutter para iniciantes #01 - O que é o Flutter" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

## Vantagens

Ele combina a beleza e a performance de aplicativos nativos com a flexibilidade e rapidez do desenvolvimento multiplataforma. Isso significa menos tempo de desenvolvimento, menos custos e mais rapidez na entrega do seu projeto. O Flutter é baseado em três pilares:

* 🚀 Desenvolvimento rápido
* 😍 Interfaces super bonitas
* ⚡️ Performance nativa

Devido a essas três características, ele já pode ser considerado um forte candidato para o desenvolvimento de aplicativos! Além disso, utilizando o Flutter, você tem vários benefícios:

* **Multiplataforma:** O Flutter simplifica o processo de desenvolvimento de aplicativos para 6 plataformas diferentes, utilizando o mesmo código-fonte, reduzindo tempo e custo de desenvolvimento;
* **Ecossistema**: Mais de 205 widgets \(componentes\) prontos para serem utilizados;
* **Desempenho:** O código Dart é executado diretamente no dispositivo \(ao contrário de outros frameworks, o Flutter **não** utiliza componentes já existentes de cada plataform\);
* **Personalização:** Todos os pixels na tela são "desenhados" pelo Flutter, o que torna o aplicativo altamente customizável e único;
* **Performance:** Os plicativos rodam a 60 frames por segundo \(ou em até 120, se o dispositivo suportar\);
* **Produtividade.** As alterações no código são refletidas no celular ou emulador em até 0,5s. Caso seja necessário reiniciar o app completamente, isso é feito em menos de 2 segundos;
* **Google:** Criador e mantenedor da ferramenta, o Google utiliza o Flutter em seus principais aplicativos, como Ads e Pay. Além disso, também é o responsável pelos principais plugins para acesso à recursos nativos do celular \(bateria, câmera, conectividade, webview, etc \).
* **Comunidade:** Além de ser ativa, o conteúdo produzido por ela garante uma curva de aprendizado mais suave e soluções para problemas comuns.

Se você busca produtividade, o Flutter é a ferramenta ideal!

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/8vFbfVz49n4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

## Benefícios

No universo da programação, sempre que surge uma nova linguagem/framework/tecnologia, é comum enaltecer os seus benefícios e os problemas à que se propõe resolver, mas pouco se fala sobre como as coisas são "do nosso lado". Desde o princípio, um dos grandes destaques do Flutter tem sido as funcionalidades que facilitam \(e muito!\) o nosso trabalho. 

Lembra que o primeiro dos três pilares é o desenvolvimento rápido? Pois bem, graças ao [hot reload](https://flutter.dev/docs/development/tools/hot-reload) e ao hot restart, temos uma experiência incrível ao desenvolver um app. 


### Hot reload

As alterações realizadas no código são refletidas em até 0,5s \(no emulador ou aparelho\) e sem perder o estado da aplicação, o que é muito importante. Imagine um fluxo de carrinho de compras em que precisamos alterar a mensagem de "compra realizada com sucesso": 

:::tip

adicionar os produtos -> proceder para o checkout -> realizar o pagamento -> "compra realizada com sucesso"

:::

Percorrer todo esse fluxo à cada alteração para verificar o resultado final irá consumir bastante tempo. Mas não com Flutter, utilizando o hot reload.

As alterações realizadas no código são refletidas em até 0,5s (no emulador ou aparelho), sem perder o estado da aplicação, o que é muito importante. Imagine um fluxo de carrinho de compras em que precisamos alterar a mensagem "compra realizada com sucesso", após adicionar os produtos, proceder ao checkout e realizar o pagamento. Percorrer todo esse fluxo a cada alteração para verificar o resultado final consumiria bastante tempo. Mas não com o Flutter, utilizando o hot reload.

### Hot restart

Quando o aplicativo é reinicializado, ou seja, perde-se o estado atual, todo o processo ocorre em menos de 2s. Alguns tipos de alterações exigem que seja feito um hot restart.

### Mágica

Quando alteramos o código, a Dart VM \(virtual machine\) consegue identificar esta alteração e sobrepõe a classe antiga com esta nova, portanto, apenas aquela parte alterada será reconstruída.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XiHGg1ZyTiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

## Origem

O projeto foi iniciado em 2014, com o codinome "sky", com o intuito de encontrar uma melhor maneira de construir interfaces para o mobile. Em 2015, foi [apresentado](https://www.youtube.com/watch?v=PnIWl33YMwA&t=67s) durante a Dart Developer Summit, onde foi possível ver o código Dart sendo executado em um aparelho Android e também apresentado com o nome **Flutter**. Em 2016, no mesmo evento, Flutter foi [definido](https://www.youtube.com/watch?v=Mx-AllVZ1VY&t=76s) como _"Uma melhor maneira de desenvolvimento mobile"_. A estréia do Flutter em um grande evento foi no Google IO 2017, em uma [sessão](https://www.youtube.com/watch?v=w2TcYP8qiRI&t=1773s) de "live coding", onde o app construido foi integrado ao Firebase e com acesso à camera. No Google IO 2018, com uma grande expectativa, Flutter já teve um destaque maior, contando com 3 excelentes palestras, cobrindo tópicos como [gerenciamento de estado](https://www.youtube.com/watch?v=RS36gBEp8OI), uso do [Material Design](https://www.youtube.com/watch?v=hA0hrpR-o8U) e novamente outra [sessão](https://www.youtube.com/watch?v=p4yLzYwy_4g) "live coding" de um app acessando o Firebase.

Em dezembro de 2018, finalmente foi [lançada](https://www.youtube.com/watch?v=D-o4BqJxmJE) a versão 1.0 e dentre tantas novidades, o principal destaque foi para o projeto Hummingbird, que futuramente se tornou o Flutter para Web.


:::note Curiosidade
Toda a apresentação da versão 1.0 foi feita em um aplicativo nativo para macOS, utilizando o Flutter.
:::

---

## Evolução

2017: Single Codebase, Two Apps

2018: Production ready

2019: A portable UI Framework

2020: *no event*
2021: Leading UI toolkit for multiplatform

2022: From a mobile-centric to a multiplatform

2023: Game-changer in the industry