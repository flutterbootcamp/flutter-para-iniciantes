---
description: A raiz do "problema"
---

# Widget Tree

Como já mencionado na [Visão Geral](../visao-geral.md), **widget tree** é a estrutura que representa como nossos widgets estão organizados. Sendo assim, conforme vamos construindo nosso aplicativo, compondo widgets uns aos outros, esta estrutura pode \(e com certeza vai\) crescendo. Estando ela cada vez maior, fica mais complicado de que a nossa interface represente o estado da nossa aplicação \([declarative ui](../visao-geral.md#declarative-ui)\). 

A imagem abaixo é da [documentação](https://flutter.dev/docs/development/data-and-backend/state-mgmt/intro) e ilustra perfeitamente um caso de um carrinho de compras:

![](../.gitbook/assets/state-management-explainer-5495afe6c3d6162f145107fe45794583bc4f2b55be377c76a92ab210be74c033.gif)

* MyApp - Nosso widget raiz. É por aqui que o aplicativo começa. 
* MyLoginScreen - Tela inicial exibida ao usuário.
* MyCatalog - Após o usuário logar, a tela possui uma barra com acesso ao carrinho de compras e também tem acesso à lista de produtos.
* MyCart - Quando o usuário escolhe um produto, este vai para o seu carrinho de compras.

O ponto chave aqui é a ação do usuário de adicionar um produto ao carrinho de compras. Pois é preciso informar ao MyCart, que seu estado mudou, agora ele possui 1 item \(MyListitem\). 

Neste exemplo, nossa árvore de widgets é pequena. Imagine se dentro do catálogo tivéssemos uma divisão por categorias e sub-categorias ou que no carrinho poderíamos ter lista de desejos, lista de presentes ou o usuário tendo uma tela com detalhes do seu perfil, histórico de todas as compras. Facilmente nossa widget tree ficará maior, mais complexa, mais entrelaçada. 

Sendo assim, temos vários widgets que podem consumir e/ou atualizar o estado da aplicação. 

Sabendo disso, à partir de agora, iremos nos orientar pela "regra" abaixo:

{% hint style="danger" %}
Reconstruir apenas a quantidade necessária de widgets quando o estado da aplicação sofrer alterações.
{% endhint %}

E como não desviar desta regra? Utilizando alguma solução de [gerenciamento de estado](https://flutter.dev/docs/development/data-and-backend/state-mgmt/options).

## Gerenciamento de estado

Este não é um tópico simples em qualquer framework. E com Flutter, não seria diferente.

{% hint style="info" %}
Flutter é uma ferramenta **não opinativa**, ou seja, ele não "opina" em como você deve fazer as coisas. Não te força a usar soluções e/ou padrões embutidos. Você é livre para escolher a solução mais adequada para o seu projeto.
{% endhint %}

E como já [dizia](https://www.youtube.com/watch?v=C3ms2uPUGkw) o Tio Ben: 

> ## “Com grandes poderes vêm grandes responsabilidades”

Escolher a solução ideal para o seu projeto é fundamental para um bom ciclo de desenvolvimento. Não dá para chegar lá na frente descobrir que a solução escolhida virou um gargalo e está dificultando a manutenção, criação de novas funcionalidades ou até mesmo limitando a expansão do nosso app. 

À seguir, apresento algumas algumas soluções para gerenciamento de estado e ao final um compilado sobre qual solução pode ser a mais indicada para o seu projeto.

{% hint style="danger" %}
Não pense que há "**a melhor soluçao**", ou a solução para **todos** os problemas. Cada uma delas tem seus pontos positivos e negativos. 
{% endhint %}



