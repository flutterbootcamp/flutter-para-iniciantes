---
sidebar_position: 2
---

# Estado: Local x Global

Já sabemos que o Flutter utiliza o modelo declarativo para construir a interface. Vamos relembrar:

![Declarativo](/img/declarative.svg)

Aprofundando um pouco mais sobre o **state** \(estado\), temos dois tipos:

**Global:** Como o próprio nome sugere, um estado compartilhado por **todo** o aplicativo. Ex: usuário logado ou não. Esta informação deve estar disponível para todos os widgets.

**Local:** Estado **isolado** de um widget, quando não há a necessidade de compartilhá-lo com nenhum outro widget. Ex: Um botão so é habilitado quando os campos obrigatórios de um formulário estão preenchidos. Portanto, o estado de ativar/desativar tal botão, não precisa ser compartilhado para nenhum outro widget do aplicativo.

### Ótimo, entendi a diferença entre estado global e local. E agora? 

Vamos descobrir como implementá-los em Flutter. 

Começaremos pelo estado **local**, por ser o mais simples. Utilizando o [Stateful](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html) widget.

Em seguida, abordaremos algumas opções para gerenciar o estado **global**, com 3 opções diferentes: com o [InheritedWidget](https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html), com o package [provider](https://pub.dev/packages/provider) e também o padrão [BLoC](https://www.didierboelens.com/2018/08/
