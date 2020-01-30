---
description: Entendendo a diferença e descobrindo onde armazena-los
---

# Estado: Local e Global

Já sabemos que o Flutter utiliza o modelo declarativo para construir a interface. Vamos relembrar:

![Nossa interface, reflete o estado da nossa aplica&#xE7;&#xE3;o.](../.gitbook/assets/ui-equals-function-of-state-54b01b000694caf9da439bd3f774ef22b00e92a62d3b2ade4f2e95c8555b8ca7.png)

Aprofundando um pouco mais sobre o **state** \(estado\), temos dois tipos:

**Global:** Como o próprio nome sugere, um estado compartilhado por **todo** o aplicativo. Ex: usuário logado ou não. Esta informação deve estar disponível para todos os widgets.

**Local:** Estado **isolado** de um widget, quando não há a necessidade de compartilhá-lo com nenhum outro widget. Ex: Um botão so é habilitado quando os campos obrigatórios de um formulário estão preenchidos. Portanto, o estado de ativar/desativar tal botão, não precisa ser compartilhado para nenhum outro widget do aplicativo.

### Ótimo, entendi a diferença entre estado global e local. E agora? 

Vamos descobrir como implementá-los em Flutter. 

Começaremos pelo estado **local**, por ser o mais simples. Utilizando o [Stateful](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html) widget.

Em seguida, abordaremos algumas opções para gerenciar o estado **global**, com 3 opções diferentes: com o [InheritedWidget](https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html), com o package [scoped\_model](https://pub.dev/packages/scoped_model) e também o padrão [BLoC](https://www.didierboelens.com/2018/08/reactive-programming---streams---bloc/). 



