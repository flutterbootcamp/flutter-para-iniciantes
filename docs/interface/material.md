---
sidebar_position: 2
---

# Material

No [catálogo](https://flutter.dev/docs/development/ui/widgets/material) de widgets do Flutter, atualmente conta com quase 40 widgets prontos para uso. Desde um simples [botão](https://api.flutter.dev/flutter/material/RaisedButton-class.html) até widgets para estruturar todo o aplicativo, como o [Scaffold](https://api.flutter.dev/flutter/material/Scaffold-class.html).

Navegando pelo catálogo, é possível identificar o que cada widget representa, porém listarei aqui os principais:

[MaterialApp](https://api.flutter.dev/flutter/material/MaterialApp-class.html): Fornece a estrutura completa para um aplicativo, de acordo com o Material Design. Todas as rotas/navegações são gerenciadas por ele. A estilização (tema / cores / fontes / textos, etc) podem (e devem) ser definidos aqui. A ii18n(internacionalização) do aplicativo também é configurada neste widget. Ele será o widget raiz de um aplicativo. 

[Scaffold](https://api.flutter.dev/flutter/material/Scaffold-class.html): Para estruturar o layout de  uma tela, este é o widget ideal. Neste podemos adicionar barras de navegação \(superior e inferior\),  e na propriedade **body**, definimos o principal widget da nossa tela.

[BottomNavigationBar](https://api.flutter.dev/flutter/material/BottomNavigationBar-class.html): Barra de navegação inferior, onde podemos adicionar ícones e textos das nossas telas.

[AppBar](https://api.flutter.dev/flutter/material/AppBar-class.html): Barra superior, onde podemos colocar o título da nossa tela. O Flutter também utiliza este widget para exibir o ícone 

[Drawer](https://api.flutter.dev/flutter/material/Drawer-class.html): Menu lateral, que se abre após clicarmos em um ícone na [AppBar](https://api.flutter.dev/flutter/material/AppBar-class.html). Ao adicionarmos um [Drawer](https://api.flutter.dev/flutter/material/Drawer-class.html) ao [Scaffold](https://api.flutter.dev/flutter/material/Scaffold-class.html) e não adicionarmos uma [AppBar](https://api.flutter.dev/flutter/material/AppBar-class.html), o ícone para abrir o [Drawer](https://api.flutter.dev/flutter/material/Drawer-class.html) não é exibido.

Veja o código de um aplicativo combinando todos estes widgets:

```dart
import 'package:flutter/material.dart';

void main() => runApp(MeuMaterialApp());

class MeuMaterialApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('App Bar'),
        ),
        drawer: const Drawer(),
        body: const Center(
          child: Text('Hello World'),
        ),
        bottomNavigationBar: BottomNavigationBar(
          items: const <BottomNavigationBarItem>[
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: 'Home',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.settings),
              label: 'Settings',
            )
          ],
        ),
      ),
    );
  }
}

```

<iframe height="300" width="100%;" scrolling="no" title="MeuMaterialApp" src="https://codepen.io/rubensdemelo/embed/yLYGyKE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rubensdemelo/pen/yLYGyKE">
  MeuMaterialApp</a> by rubensdemelo (<a href="https://codepen.io/rubensdemelo">@rubensdemelo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Neste vídeo, há uma demonstração de como utilizar os widgets da biblioteca [Material](https://api.flutter.dev/flutter/material/material-library.html) para construir um aplicativo com pouco mais de 100 linhas de código.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DL0Ix1lnC4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
