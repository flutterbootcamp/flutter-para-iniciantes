---
sidebar_position: 1
---

# Widget Tree

É a estrutura que representa como nossos widgets estão organizados. 

Conforme vamos construindo nosso aplicativo, compondo widgets uns aos outros, esta estrutura pode \(e com certeza vai\) crescendo. Estando ela cada vez maior, fica mais complicado de que a nossa interface represente o estado da nossa aplicação. 

<!-- A imagem abaixo é da [documentação](https://flutter.dev/docs/development/data-and-backend/state-mgmt/intro) e ilustra perfeitamente um caso de um carrinho de compras:

![](../.gitbook/assets/state-management-explainer-5495afe6c3d6162f145107fe45794583bc4f2b55be377c76a92ab210be74c033.gif)

* MyApp - Nosso widget raiz. É por aqui que o aplicativo começa. 
* MyLoginScreen - Tela inicial exibida ao usuário.
* MyCatalog - Após o usuário logar, a tela possui uma barra com acesso ao carrinho de compras e também tem acesso à lista de produtos.
* MyCart - Quando o usuário escolhe um produto, este vai para o seu carrinho de compras.

O ponto chave aqui é a ação do usuário de adicionar um produto ao carrinho de compras. Pois é preciso informar ao MyCart, que seu estado mudou, agora ele possui 1 item \(MyListitem\). 

Neste exemplo, nossa árvore de widgets é pequena. Imagine se dentro do catálogo tivéssemos uma divisão por categorias e sub-categorias ou que no carrinho poderíamos ter lista de desejos, lista de presentes ou o usuário tendo uma tela com detalhes do seu perfil, histórico de todas as compras. Facilmente nossa widget tree ficará maior, mais complexa, mais entrelaçada.  -->

Sendo assim, temos vários widgets que podem consumir e/ou atualizar o estado da aplicação. 

Sabendo disso, à partir de agora, iremos nos orientar pela "regra" abaixo:

:::info
Reconstruir apenas a quantidade necessária de widgets quando o estado da aplicação sofrer alterações.
:::

<!-- E como não desviar desta regra? Utilizando alguma solução de [gerenciamento de estado](https://flutter.dev/docs/development/data-and-backend/state-mgmt/options). -->