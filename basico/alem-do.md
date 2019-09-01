---
description: Entenda a diferença e saiba quando utilizar cada um deles.
---

# Stateless x Stateful

Já disse anteriormente que no Flutter temos apenas 2 tipos de widgets:

[Stateless](https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html): Um widget que **não** tem seu estado alterado.

* Um texto, é um widget que não tem seu estado alterado.

[Stateful](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html): Um widget que tem seu estado alterado.

* Um switch, é um widget que tem seu estado alterado. 

Por definição, na própria documentação da [API](https://api.flutter.dev/flutter/widgets/Widget-class.html), temos:

> Um widget é uma descrição imutável de parte de uma interface de usuário

Como assim?! Dois tipos, mutável e não mutável, e a API explicitamente nos dizendo que é imutável?

Vamos lá!  

A documentação complementa com a seguinte afirmação:

> Widgets por si só, não possuem estado mutável \(todos os campos devem ser final\). Se precisar associar um estado mutável a um widget, considere utilizar o [StatefulWidget](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html), que cria um objeto do tipo [State](https://api.flutter.dev/flutter/widgets/State-class.html)...

Logo, podemos assumir que com o objeto [State](https://api.flutter.dev/flutter/widgets/State-class.html), o widget do tipo [StatefulWidget](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html) torna-se mutável. 

Para clarificar:

O ícone de like no Instagram/Facebook, é um Stateful widget, pois ao ser pressionado, ele muda de cor e ainda atualiza a quantidade de curtidas naquele post/foto.

O texto com o nome do seu perfil, é um Stateless widget, pois ele é estático \(não possui nenhuma opção de interação\).

Ainda há espaço nos aprofundarmos neste assunto, mas por hora, entender esta básica diferença entre os tipos de widgets já é o suficiente. 

