---
sidebar_position: 3
---

# Cupertino

Na biblioteca [Cupertino](https://api.flutter.dev/flutter/cupertino/cupertino-library.html) temos o duas opções de widget para estruturar a tela do aplicativo;

[CupertinoPageScaffold](https://api.flutter.dev/flutter/cupertino/CupertinoPageScaffold-class.html): Onde temos uma barra de navegação no topo \(onde utilizamos uma [CupertinoNavigationBar](https://api.flutter.dev/flutter/cupertino/CupertinoNavigationBar-class.html) e o restante da tela é com o conteúdo.

[CupertinoTabScaffold](https://api.flutter.dev/flutter/cupertino/CupertinoTabScaffold-class.html): Similar ao widget anterior, porém além da barra de navegação superior, este fornece um layout que possui uma barra de navegação inferior, onde utilizando uma [CupertinoTabBar](https://api.flutter.dev/flutter/cupertino/CupertinoTabBar-class.html) e [CupertinoTabView](https://api.flutter.dev/flutter/cupertino/CupertinoTabView-class.html). 

Outros componentes característicos de um aplicativo iOS nativo também estão disponíveis, como: 

[CupertinoActionSheet](https://api.flutter.dev/flutter/cupertino/CupertinoActionSheet-class.html): Quando precisarmos oferecer opções de escolha para alguma ação.

[CupertinoSegmentedControl](https://api.flutter.dev/flutter/cupertino/CupertinoSegmentedControl-class.html): Utilizado para navegação por abas.

[CupertinoPicker](https://api.flutter.dev/flutter/cupertino/CupertinoPicker-class.html), [CupertinoDatePicker](https://api.flutter.dev/flutter/cupertino/CupertinoDatePicker-class.html) e [CupertinoTimerPicker](https://api.flutter.dev/flutter/cupertino/CupertinoTimerPicker-class.html): Para facilitar a entrada de dados pelo usuário.

Veja o código de um aplicativo combinando alguns destes widgets:

```dart
import 'package:flutter/cupertino.dart';

void main() => runApp(MeuCupertinoApp());

class MeuCupertinoApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return CupertinoApp(
      title: 'Cupertino App',
      home: CupertinoTabScaffold(
        tabBar: CupertinoTabBar(items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
              icon: Icon(CupertinoIcons.home), label: 'Home'),
          BottomNavigationBarItem(
              icon: Icon(CupertinoIcons.settings), label:'Settings'),
        ]),
        tabBuilder: (context, index) {
          return const Center(child: Text('Hello World'));
        },
      ),
    );
  }
}

```

<!-- ![Cupertino](/img/cupertino.png) -->

<iframe height="300" width="100%;" scrolling="no" title="MeuCupertinoApp" src="https://codepen.io/rubensdemelo/embed/xxPQWpb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rubensdemelo/pen/xxPQWpb">
  MeuCupertinoApp</a> by rubensdemelo (<a href="https://codepen.io/rubensdemelo">@rubensdemelo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Neste vídeo, os widget da biblioteca [Cupertino](https://api.flutter.dev/flutter/cupertino/cupertino-library.html) são apresentados com maiores detalhes.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3PdUaidHc-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
