---
sidebar_position: 9
---

# main.dart

O ponto de partida de qualquer aplicativo em Dart. Por padrão, utiliza-se um arquivo chamado `main.dart` com a chamada ao método `main()`.

```dart
void main() {
  print('Hello, World!');
}
```

No Flutter, método `runApp` é o responsável por executar o aplicativo.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(SuperApp());
}

class SuperApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SuperApp',
      home: Scaffold(
        appBar: AppBar(
          title: Text('SuperApp'),
        ),
        body: Center(
          child: Text('Hello, SuperApp!'),
        ),
      ),
    );
  }
}
```

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/mCRdUXcqMuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>