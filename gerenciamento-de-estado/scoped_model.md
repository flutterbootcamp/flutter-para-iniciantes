---
description: >-
  Foi o primeiro a ser recomendado pela documentação do Flutter, devido à sua
  facilidade de implementação e de entendimento.
---

# scoped\_model



{% hint style="danger" %}
Já existem melhores alternativas ao **scoped\_model**.
{% endhint %}

Com o [scoped\_model](https://pub.dev/packages/scoped\_model) conseguimos facilmente compartilhar dados dentro do aplicativo e caso estes dados sofram alterações, notificamos todos aqueles widgets que dependem deste dado para que eles se atualizem.

{% hint style="success" %}
Recomendo que você comece por este package. Ele com certeza irá te atender nos primeiros passos e ficará mais fácil entender como manipular o estado de um aplicativo com Flutter. E também irá te dar uma ótima base para utilizar outras soluções de gerenciamento de estado.
{% endhint %}

Nossa classe com o(s) dado(s) que queremos compartilhar deve estender a classe **Model** (que pertence ao package) e para notificarmos os widgets que o dado foi alterado, chamamos o método `notifyListeners()`.

```dart
void main() {
  runApp(MyApp(
    modelo: ContadorModel(),
  ));
}

class MyApp extends StatelessWidget {
  final ContadorModel modelo;

  const MyApp({Key key, @required this.modelo}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Na raiz da nossa árvore de widgets, adicionamos o widget ScopedModel.  
    // Ele irá prover ContadorModel para todos os widgetS filhos quando quando 
    // utilizarem o widget ScopedModelDescendant.
    return ScopedModel<ContadorModel>(
      model: modelo,
      child: MaterialApp(
        title: 'Scoped Model Demo',
        home: ContadorHome('Scoped Model Demo'),
      ),
    );
  }
}

class ContadorModel extends Model {
  int _contador = 0;
  int get contador => _contador;

  void incrementa() {
    // incrementa o contador
    _contador++;
    // notifica os widgets após o contador ser incrementado
    notifyListeners();
  }
}

class ContadorHome extends StatelessWidget {
  final String titulo;

  ContadorHome(this.titulo);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('You have pushed the button this many times:'),
            // Cria um ScopedModelDescendant. Este widget irá procurar pelo
            // ScopedModel<CounterModel> mais próximo. 
            // Sempre que o método `notifyListeners` do ContadorModel  for chamado
            // este widget será reconstruído.
            ScopedModelDescendant<ContadorModel>(
              builder: (context, child, modelo) {
                return Text(
                  modelo.contador.toString(),
                );
              },
            ),
          ],
        ),
      ),
      // Uso do ScopedModelDescendant novamente para chamar a função que incrementa
      // o contador.
      floatingActionButton: ScopedModelDescendant<ContadorModel>(
        builder: (context, child, modelo) {
          return FloatingActionButton(
            onPressed: modelo.incrementa, 
            tooltip: 'Incrementa',
            child: Icon(Icons.add),
          );
        },
      ),
    );
  }
}
```

Como podemos perceber, o **scoped\_model** possibilita que qualquer widget filho de que **ScopedModel** acesse os atributos e métodos do **ContadorModel**, através do widget **ScopedModelDescendant**.

{% hint style="info" %}
Sempre que o método **notifyListeners()** for chamado, ele irá atualizar **TODOS** os widgets **ScopedModelDescendant** que forem filhos de **ScopedModel\<ContadorModel> (**a função **builder** será executada novamente).
{% endhint %}

Devido ao fato de podermos vincular apenas 1 classe ao widget **ScopedModel**, em aplicativos com mais classes que compartilham dados, não é recomendado o uso do scoped\_model pois nosso estado pode ser alterado mais de 1 classe. Para situações assim, considere utilizar alguma das próximas opções deste livro.
