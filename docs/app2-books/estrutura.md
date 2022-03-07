---
sidebar_position: 2
---

# Parte 1 - Estrutura
Esta é base do Books. Nada de novo (por enquanto).



```dart
import 'package:flutter/material.dart';

void main() {
  runApp( BookApp());
}

class BookApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home:  HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: ListView(
          children: [
            const TextField(),
            const SizedBox(height: 16),
            ElevatedButton.icon(
                onPressed: (){},
                icon: const Icon(Icons.search),
                label: const Text('Pesquisar')),
            const SizedBox(height: 16),
            Text(
              'Foram encontrados X livros sobre X: ',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
    );
  }
}
```