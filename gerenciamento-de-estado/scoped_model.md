---
description: >-
  Foi o primeiro a ser recomendado pela documentação do Flutter, devido à sua
  facilidade de implementação e de entendimento.
---

# scoped\_model

Com este [package](https://pub.dev/packages/scoped_model) conseguimos facilmente compartilhar dados dentro do aplicativo e caso estes dados sofram alterações, notificamos todos aqueles widgets que dependem deste dado para que eles se atualizem.

Nossa classe com o\(s\) dado\(s\) que queremos compartilhar deve estender a classe **Model** \(que pertence ao package\) e para notificarmos os widgets que o dado foi alterado, chamamos o método `notifyListeners()`.



```dart
class ContadorModel extends Model {
  int _contador = 0;

  int get contador => _contador;

  void increment() {
    // incrementa o contador
    _contador++;
    
    // notifica todos os listeners deste modelo.
    notifyListeners();
  }
}

class CounterApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // First, create a `ScopedModel` widget. This will provide 
    // the `model` to the children that request it. 
    return ScopedModel<CounterModel>(
      model: ContadorModel(),
      child: Column(children: [
        // Cria um ScopedModelDescendant. This widget will get the
        // CounterModel from the nearest ScopedModel<CounterModel>. 
        // It will hand that model to our builder method, and rebuild 
        // any time the CounterModel changes (i.e. after we 
        // `notifyListeners` in the Model). 
        ScopedModelDescendant<ContadorModel>(
          builder: (context, child, model) => Text('${model.contador}'),
        ),
        Text("Este texto não depende de ContadorModel")
      ])
    );
  }
}
```



