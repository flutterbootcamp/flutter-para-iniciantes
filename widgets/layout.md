---
description: Entendo os principais widgets que te ajudarão na montagem da sua interface.
---

# Layout

Antes de constrruirmos uma tela, om botões, inputs, imagens, precisamos definir como será o seu layout, como por exemplo, se os itens serão posicionados na vertical ou horizontal. Na parte superior, teremos um slide com fotos fixo e abaixo uma lista de itens ? São definições estruturais básicas e que devem ser feitas antes da customização \(não se começa construindo uma casa, sem antes ter a planta em mãos\).

Com Flutter é a mesma coisa: Definimos o layout da nossa tela e então vamos adicionando widgets de interface.

Imagine que você precisa construir o widget abaixo:

![](../.gitbook/assets/flutter-layout.png)

Podemos concluir que:

* Os widgets devem ser exibidos horizontalmente;
* O ícone e o texto devem ser exibidos verticalmente.

Sendo um pouco mais _flutterista_: 

* Deve haver uma [Row](https://api.flutter.dev/flutter/widgets/Row-class.html) \(linha\) para que os widgets sejam exibidos na horizontal;
* A Row será composta por 3 itens do tipo [Column](https://api.flutter.dev/flutter/widgets/Column-class.html) \(coluna\), para que os widgets sejam exibidos na vertical;
* Os widgets dentro da Column devem ser: [Icon](https://api.flutter.dev/flutter/widgets/Icon-class.html) e [Text](https://api.flutter.dev/flutter/widgets/Text-class.html) . 

Então, temos: 

![](../.gitbook/assets/flutter-layout-2.png)

{% hint style="success" %}
Linhas e colunas farão parte de vários layouts que você irá construir, acostume-se. 
{% endhint %}

Porém, eles não são os únicos. 

Algumas vezes, nossa tela será composta por Listas \(como a sua agenda de contatos\). Para isso, há o widget [ListView](https://api.flutter.dev/flutter/widgets/ListView-class.html).

Outras vezes, precisaremos empilhar um widget sobre o outro:

![](../.gitbook/assets/flutter-layout-3.png)

Perceba que o texto está posicionado "acima" da imagem. O widget para termos esta pilha de widget é o [Stack](https://api.flutter.dev/flutter/widgets/Stack-class.htmlhttps://api.flutter.dev/flutter/widgets/Stack-class.html).

Existem vários outros wigets que são utilizados para montar layouts. Para se aprofundar, recomendo que visite a seção [Layout](https://flutter.dev/docs/development/ui/widgets/layout) do catálogo de widgets.

Fonte: [https://flutter.dev/docs/development/ui/layout](https://flutter.dev/docs/development/ui/layout)

